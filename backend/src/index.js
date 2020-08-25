const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const pool = require('./db');
const middlewares = require('./middlewares');

const app = express();

app.use(morgan('common'));
app.use(helmet());
app.use(cors());
app.use(express.json()); //Let's us access the object req.body which contains data from client side for adding a booking

//ROUTES//

//create bookings
//Anytime we create or get data, it will take some time.
//Async provides a method called await() which waits for the function to complete before it continues
app.post("/book", async(req, res) => {
  try {
    var name = req.body.name;
    var contact = req.body.contact;
    var gender = req.body.gender;
    var appointment = req.body.appointment;
    var description = req.body.description;
    const newBooking = await pool.query(
      //returning * makes it easier to check in POSTMAN!
      "INSERT INTO bookings (patient_name, contact, gender, appointment, description) VALUES ($1 , $2 , $3 , $4 , $5) RETURNING *",
      [name, contact, gender, appointment, description]
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
