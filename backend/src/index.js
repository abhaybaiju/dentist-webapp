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
    res.json(newBooking.rows[0]); //returns readable object
    //console.log(req.body); //Test on POSTMAN! I didn't do :p
  } catch (err) {
    console.error(err.message);
});

//edit(update) bookings?
//Also how about reschedule appointment option? 

//get all payments

app.get('/admin', async(req, res) => {
    /*res.json({
        message: "Hello Miss Angular Web Developer!",
    })*/

    try {
      //Select already gives you back data so no need for "returning *"
      const allPayments = await pool.query("SELECT * FROM payments");
      res.json(allPayments.rows);
    } catch (err) {
      console.error(err.message);
    }
})

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;
app.listen(port, () => {
    console.log("Open 'http://localhost:1337");
});
