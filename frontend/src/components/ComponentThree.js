import React from 'react';
import {Button, Grid, Table, TableRow, TableCell, makeStyles} from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import axios from 'axios';
import { useStateValue } from './StateProvider.js';
import img from './images/blue_wave.png';
import './css/App.css';

const useStyles = makeStyles((theme) => ({
  button: {
    background: 'linear-gradient(to right, #027e97 0%, #63a6b7  51%, #027e97 100%)',
    color: 'white',
    transition: '0.5s',
    boxShadow: '0 0 20px #eee',
    borderRadius: '10px',
    padding: '10px 60px',
    textAlign: 'center',
    textTransform: 'uppercase',
    backgroundSize: '200% auto',
    display: 'block',
    "&:hover": {
      backgroundPosition: 'right center', /* change the direction of the change here */
      color: '#fff',
      textDecoration:'none'
    }
  }
}));


function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script);
  })

}

const sendPostRequest = async (postData) => {
try{
    const resp = await axios.post("http://localhost:1337/book",postData);
    console.log(resp);
} catch (err) {
    console.error(err);
}
}

const __DEV__ = document.domain === 'localhost'

const Pay = () => {

  const [{globalName, globalEmail, globalPhone, globalGender, globalAge, globalTime, globalDate}, dispatch] = useStateValue();

  async function displayRazorPay() {

    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    if(!res) {
      alert('Razorpay SDK failed to load. Are you online?')
      return
    }

    const data = await fetch('http://localhost:1337/pay', {method: 'POST' }).then((t) =>
      t.json()
    )

    if (!data) {
      alert("Server error. Are you online?");
      return;
    }

    console.log(data)

    const options = {
        "key": __DEV__ ? "rzp_test_KOxIh7UxMQOrbR" : "PRODUCTION_KEY", // Enter the Key ID generated from the Dashboard
        "amount": data.amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        //amount goes as a string value in razorpay, and refers to smallest possible unit of currency i.e. paise
        "currency": data.currency,
        "name": "Lila Dental Clinic",
        "description": "Appointment Booking",
        "image": "http://localhost:1337/logo.png",
        "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": (response) => {
          var redirect_url = "/";
          if (typeof response.razorpay_payment_id == 'undefined' ||  response.razorpay_payment_id < 1) {
            localStorage.setItem('payment',"failure");
            redirect_url = '/Book';
          } else {
            localStorage.setItem('payment',"success");
            localStorage.setItem("globalTime", globalTime);
            localStorage.setItem("globalDate",globalDate);
            const requestData = {
              "name": globalName,
              "contact": globalPhone,
              "gender": globalGender,
              "date": globalDate,
              "time": globalTime,
              "email": globalEmail
          }
            sendPostRequest(requestData);
            redirect_url = '/Success';
          }
          window.location = redirect_url;
        },
        "buttontext":"Pay with Razorpay",
        "prefill.contact":globalPhone,
        "prefill.email":globalEmail,
        "theme.color":"#027e97"
    };
    const paymentObject = window.Razorpay(options).open();
    paymentObject.open();
  }
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="stretch" >
      <Grid item lg={7} style={{background: `url(${img})`, backgroundSize:'450px', backgroundRepeat:'no-repeat'}}>
        <img src={require('./images/verified.svg')} alt="" height="200" style={{marginTop:'20%', marginLeft:'30%'}}/>
      </Grid>
      <Grid item lg={5} style={{marginLeft:'0%', marginTop:'5.5%', marginBottom:'3.4%', width:'95%'}}>
        <Table>
          <TableRow>
            <TableCell style={{borderBottom:'none', background:'#f8faf9'}}>
              <h2 style={{color:'#027e97', textAlign:'center', marginTop:'-1%', marginBottom:'-1%'}}><VerifiedUserIcon style={{marginRight:'2%', marginBottom:'-1%'}}/>Verify your details</h2>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{borderBottom:'none'}}>NAME :</TableCell>
            <TableCell style={{borderBottom:'none'}}>{globalName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{borderBottom:'none'}}>EMAIL :</TableCell>
            <TableCell style={{borderBottom:'none'}}>{globalEmail}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{borderBottom:'none'}}>PHONE :</TableCell>
            <TableCell style={{borderBottom:'none'}}>{globalPhone}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{borderBottom:'none'}}>GENDER :</TableCell>
            <TableCell style={{borderBottom:'none'}}>{globalGender}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{borderBottom:'none'}}>AGE :</TableCell>
            <TableCell style={{borderBottom:'none'}}>{globalAge}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{borderBottom:'none'}}>AMOUNT :</TableCell>
            <TableCell style={{borderBottom:'none'}}>INR 200</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{borderBottom:'none', textAlign:'center'}}><Button id="pay" onClick={displayRazorPay} className={classes.button}  >Confirm and Pay</Button></TableCell>
          </TableRow>
        </Table>
      </Grid>
    </Grid>
  );
}

export default Pay;
