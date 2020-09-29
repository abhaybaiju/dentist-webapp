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

const app = express();

//var serviceAccount = require("./service_account.json");

app.use(morgan('common'));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json())
app.use(express.json()); //Let's us access the object req.body which contains data from client side for adding a booking

const razorpay = new Razorpay({
  key_id: 'rzp_test_KOxIh7UxMQOrbR',
  key_secret: 'vu0uISENcLZPDFPvuKIWx4f6',
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
    var description = req.body.description;
    const newBooking = await pool.query(
      //returning * makes it easier to check in POSTMAN!
      "INSERT INTO bookings (patient_name, contact, gender, time, date, description) VALUES ($1 , $2 , $3 , $4 , $5 , $6) RETURNING *",
      [name, contact, gender, time, date, description]
    );
    res.json("Accepted"); //returns accepted status code
    //need to set start and end time from appointment
    // Can also change appointment structure into month day and hour fields
    var event = {
      'summary': name,
      'description': description,
      'start': {
        'dateTime': '2020-08-25T09:00:00',
        'timeZone': 'Asia/Kolkata',
      },
      'end': {
        'dateTime': '2020-08-25T09:30:00',
        'timeZone': 'Asia/Kolkata',
      },
      'reminders': {
        'useDefault': false,
        'overrides': [
          {'method': 'email', 'minutes': 24 * 60},
          {'method': 'popup', 'minutes': 10},
        ],
      },
    };

    calendar.events.insert({
      auth: jwtClient,
      calendarId: 'abhay0198@gmail.com',
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

//get all payments

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

    const slots = await pool.query(

      "SELECT * FROM bookings WHERE user_id = 1", (err, result) => {
        if(err){
          console.error(err.stack);
        }
        console.log(result.rows)
        res.json({
          rowCount: result.rowCount,
          rows: result.rows,
        })
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
