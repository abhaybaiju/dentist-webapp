const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const pool = require('./db');
const middlewares = require('./middlewares');

const Razorpay = require('razorpay')
const shortid = require('shortid')
const path = require('path')
const bodyParser = require('body-parser')
const sesClient = require('./ses-client')
const Mailgen = require('mailgen')
const app = express();
const dotenv= require('dotenv');
dotenv.config();
//var serviceAccount = require("./service_account.json");

app.use(morgan('common'));
app.use(helmet());

app.use(cors());
app.use(bodyParser.json())
app.use(express.json()); //Let's us access the object req.body which contains data from client side for adding a booking

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_TEST_ID,
  key_secret: process.env.RAZORPAY_TEST_SECRET,
});

//ROUTES//

app.post("/pay",async (req, res) => {

  const payment_capture=1
  const currency = 'INR'
  const amount = 200

  const options = {
    amount: (amount*100).toString(),
    currency: currency,
    receipt: shortid.generate(),
    payment_capture: 1 //1 for automatic capture and 0 for manual
  }

  try {
    const response = await razorpay.orders.create(options)
    console.log(response)
    res.json({
      id:response.id,
      currency: response.currency,
      amount: response.amount
    })
  } catch(err) {
    console.log(err)
  }
})


app.post('/verification', (req, res) => {
  //do a validation
  const SECRET = 'LilaDentalClinic@Vikaspuri'
  console.log(req.body)

  //RazorPay signature is the hashed value of the payload(all info on successful payment)
  //We compute this hashed value. If hashed value matches, payment validated else not.
  const crypto = require('crypto')
  const shasum = crypto.createHmac('sha256', SECRET)
  shasum.update(JSON.stringify(req.body))
  const digest = shasum.digest('hex')

  console.log(digest, req.headers['x-razorpay-signature'])
  if(digest === req.headers['x-razorpay-signature']) {
    console.log('Valid request!');
    //process it
    res.json({status: 'ok'}) //200 HTTP STATUS CODE RESPONSE
    //If we don't send this response, RazorPay will deactivate our Webhook and we will not receive any further calls
    //Mandatory line(Top/Bottom of code)
    //RazorPay will mark our server as down if we do not respond.
  } else {
    //pass it
    res.status(502)
  }
})


//create bookings
//Anytime we create or get data, it will take some time.
//Async provides a method called await() which waits for the function to complete before it continues
app.post("/book", async(req, res) => {
  try {
    var name = req.body.name;
    var contact = req.body.contact;
    var gender = req.body.gender;
    var time = req.body.time;
    var date = new Date(req.body.date);
    var email = req.body.email;
    const newBooking = await pool.query(
      //returning * makes it easier to check in POSTMAN!
      "INSERT INTO bookings (patient_name, contact, gender, time, date, email) VALUES ($1 , $2 , $3 , $4 , $5 , $6) RETURNING *",
      [name, contact, gender, time, date, email]
    );
    res.json("Accepted");
    
    //create email
    var mailGenerator = new Mailgen({
      theme: 'salted',
      product: {
          // Appears in header & footer of e-mails
          name: 'Lila Dental Clinic',
          link: 'https://mailgen.js/'
          // Optional product logo
          // logo: 'https://mailgen.js/img/logo.png'
      }
    });
    var emailContent = {
      body: {
          name: name,
          intro: 'Your appointment at Lila Dental Clinic has been booked successfully.',
          table: {
            data: [
                {
                    name: name,
                    date: date.toDateString(),
                    time: time
                }
            ],
            columns: {
                // Optionally, customize the column widths
            }
        },
          action: {
              instructions: 'To add your appointment to your calendar, please click here:',
              button: {
                  color: '#1c92d2', // Optional action button color
                  text: 'Add to Google Calendar',
                  link: 'https://mailgen.js/confirm?s=d9729feb74992cc3482b350163a1a010'
              }
          },
          outro: 'Need help, or have questions? Contact us below.'
      }
  };
  
  // Generate an HTML email with the provided contents
  var emailBody = mailGenerator.generate(emailContent);

    //Send Email
    sesClient.sendEmail(email, "Your appointment is confirmed", emailBody);

    date.setHours(time/100,time%100,0);
    var endDate =  new Date(date.getTime() + 15*60000);
    var event = {
      'summary': name,
      'description': contact,
      'start': {
        'dateTime': date.toISOString(),
        'timeZone': 'Asia/Kolkata',
      },
      'end': {
        'dateTime': endDate.toISOString(),
        'timeZone': 'Asia/Kolkata',
      },
      'reminders': {
        'useDefault': false,
        'overrides': [
          {'method': 'popup', 'minutes': 10},
        ],
      },
    };

    calendar.events.insert({
      auth: jwtClient,
      calendarId: 'drcsbaiju66@gmail.com',
      resource: event,
    }, function(err, event) {
      if (err) {
        console.log('There was an error contacting the Calendar service: ' + err);
        return;
      }
      console.log('Event created: %s', event.data.htmlLink);
    });
   /* calendar.events.list({
       auth: jwtClient,
       calendarId: 'abhay0198@gmail.com'
    }, function (err, response) {
       if (err) {
           console.log('The API returned an error: ' + err);
           return;
       }
       console.log(response);
       var events = response.data.items;
       if (events.length == 0) {
           console.log('No events found.');
       } else {
           console.log('Event from Google Calendar:');
           for (let event of response.data.items) {
               console.log('Event name: %s', event.summary);
           }
       }
    });*/
    //console.log(req.body); //Test on POSTMAN! I didn't do :p
  } catch (err) {
    console.error(err.message);
  }
});

//edit(update) bookings?
//Also how about reschedule appointment option?
//How much calendar should be visible?
//login through contact w/0 password? So that user can view previous appointments?


app.post("/query", async(req, res) => {
  try {
    var name = req.body.name;
    var message = req.body.message;
    var email = req.body.email;
    
    //create email
    var mailGenerator = new Mailgen({
      theme: 'salted',
      product: {
          // Appears in header & footer of e-mails
          name: 'Lila Dental Clinic',
          link: 'https://mailgen.js/'
          // Optional product logo
          // logo: 'https://mailgen.js/img/logo.png'
      }
    });
    var emailContent = {
      body: {
          name: "C S Baiju",
          intro: `You have a new query from ${name}.`,
          table: {
            data: [
                {
                    name: name,
                    email: email,
                    message: message
                }
            ],
            columns: {
                // Optionally, customize the column widths
            }
        },
          action: {
              instructions: 'To reply to this query, please click here:',
              button: {
                  color: '#1c92d2', // Optional action button color
                  text: 'Reply to query',
                  link: `mailto:${email}?subject=Response%20to%20query%20email
                  &body=Hi%20${name},%0D%0A%0D%0A%0D%0A%0D%0ARegards%0D%0ADr%20C%20S%20Baiju`
              }
          },
          outro: 'Need help, or have questions? Contact us below.'
      }
  };

  var emailContentUser = {
    body: {
        name: name,
        intro: `You query has been sent.`,
        table: {
          data: [
              {
                  name: name,
                  email: email,
                  message: message
              }
          ],
          columns: {
              // Optionally, customize the column widths
          }
      },
        action: {
            instructions: 'To book an appointment, please click here:',
            button: {
                color: '#1c92d2', // Optional action button color
                text: 'Book Appointment',
                link: "https://liladentalclinic.com"
            }
        },
        outro: 'Need help, or have questions? Contact us below.'
    }
};
  
  // Generate an HTML email with the provided contents
  var emailBody = mailGenerator.generate(emailContent);
  var emailBodyUser = mailGenerator.generate(emailContentUser);
  //Send Email
  sesClient.sendEmail("abhay0198@gmail.com", "You have a new query", emailBody);
  sesClient.sendEmail(email, "Your query has been sent", emailBodyUser);
  res.send("Query Sent");

  } catch (err) {
    console.error(err.message);
  }
});

app.get('/logo.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'logo.png'))
})

app.get('/admin', async(req, res) => {
    /*res.json({
        message: "Hello Miss Angular Web Developer!",
    })*/

    try {
      //Select already gives you back data so no need for "returning *"
      const allPayments = await pool.query("SELECT * FROM bookings");
      res.json(allPayments.rows);
    } catch (err) {
      console.error(err.message);
    }
})

let {google} = require('googleapis');
let privatekey = require("./privatekey.json");
// configure a JWT auth client
let jwtClient = new google.auth.JWT(
  privatekey.client_email,
  null,
  privatekey.private_key,
  ['https://www.googleapis.com/auth/calendar']);
//authenticate request
jwtClient.authorize(function (err, tokens) {
if (err) {
console.log(err);
return;
} else {
console.log("Successfully connected!");
}
});

let calendar = google.calendar('v3');

//time slot fetcher
app.get('/slotfetcher', async (req, res) =>{
  try {
    console.log(req.query.date)
    var date = req.query.date;
    const slots = await pool.query(

      "SELECT * FROM bookings WHERE date = $1", [date],  (err, result) => {
        if(err){
          console.error(err.stack);
        }
        else{
        console.log(result.rows)
        res.json({
          rowCount: result.rowCount,
          rows: result.rows,
        })
      }
      }

    );

  } catch (error) {
    console.log(error);
  }
})

app.get('/', (req, res) => {
  res.json({
    message: "Hii",
  })
})

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;
app.listen(port, () => {
    console.log("Open 'http://localhost:1337");
});
