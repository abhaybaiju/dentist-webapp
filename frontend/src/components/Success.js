import React, {useState} from 'react';
import {Grid, Button, makeStyles, Fade} from '@material-ui/core';
import Navbar from './Navbar';
import Footer from './Footer';
import moment from 'moment';
import ImageSVG from './image';
import Rating from '@material-ui/lab/Rating';
import { useStateValue } from './StateProvider.js';
import calendar from './images/calendar.svg';

const Success = () => {

    const useStyles = makeStyles((theme) => ({
      root: {
        width: '100%',
      },
      button: {
        marginTop:'3%',
        padding:'2%',
        width:'90%',
        backgroundColor: 'white',
        color:'#3f3d56',
        boxShadow:'none',
        borderRadius:'5px',
        border:'1px solid #3f3d56',
        "&:hover": {
          backgroundColor: "#2f2b4f",
          color:'white',
          borderRadius:'5px',
          borderColor:'#2f2b4f',
        },
        "&:focus": {
          backgroundColor: "#2f2b4f",
          color:'white',
          borderColor:'#2f2b4f',
        }
      },
    }));

    const [{globalRating, globalName}, dispatch] = useStateValue();
    const [value, setValue] = useState(globalRating);

    const handleRatingChange = (e, val) => {
      setValue(val);
      console.log(val);
      localStorage.setItem("rating","true");
      dispatch({
        type: 'SET_RATING',
        globalRating: value,
      });
    }

    const classes = useStyles();
    const date = new Date(localStorage.getItem('globalDate'));
    const time = localStorage.getItem('globalTime');
    const localRating = localStorage.getItem('rating');
    const hours = parseInt(parseInt(time)/100);
    const minutes = parseInt(parseInt(time)%100);
    var date1 = date.setHours(hours,minutes,0);
    const startDate = moment(date1).format("YYYYMMDDT");
    const endHour = date.getHours();
    const endMins = date.getMinutes();

    var string;
    if(minutes === 0){
      string = "http://www.google.com/calendar/event?action=TEMPLATE&dates=" + startDate + hours.toString()  + "0000%2F" + startDate + endHour.toString() + endMins.toString() + "00&text=Dentist%20Appointment&location=Lila%20Dental%20Clinic%20Dg-2%2F57-a%2C%20Dda%20Flats%2C%20Vikaspuri%2C%20Vikaspuri%2C%20Delhi%2C%20110018&ctz=Asia/Kolkata&details=Appointment%20at%20Lila%20Dental%20Clinic";
    }
    else{
      if(endMins === 0){
        string = "http://www.google.com/calendar/event?action=TEMPLATE&dates=" + startDate + hours.toString() + minutes.toString() + "00%2F" + startDate + endHour.toString() + "0000&text=Dentist%20Appointment&location=Lila%20Dental%20Clinic%20Dg-2%2F57-a%2C%20Dda%20Flats%2C%20Vikaspuri%2C%20Vikaspuri%2C%20Delhi%2C%20110018&ctz=Asia/Kolkata&details=Appointment%20at%20Lila%20Dental%20Clinic";
      }
      else{
        string = "http://www.google.com/calendar/event?action=TEMPLATE&dates=" + startDate + hours.toString() + minutes.toString() + "00%2F" + startDate + endHour.toString() + endMins.toString() + "00&text=Dentist%20Appointment&location=Lila%20Dental%20Clinic%20Dg-2%2F57-a%2C%20Dda%20Flats%2C%20Vikaspuri%2C%20Vikaspuri%2C%20Delhi%2C%20110018&ctz=Asia/Kolkata&details=Appointment%20at%20Lila%20Dental%20Clinic";
      }
    }
    return(
      <Fade in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1500 } : {})}>
          <Grid container alignItems="stretch" justify="space-evenly" style={{marginBottom:'-2%',overflow:'hidden'}} spacing={2}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Navbar/>
            </Grid>
            <Grid item lg={4} md={5} sm={8} xs={10} style={{color:'#3f3d56', marginTop:'10%'}}>
              <h1 style={{lineHeight:'1.3'}}>Hello {globalName},</h1>
              <p>Your appointment has been booked successfully!</p>
              {( localRating === null ) ? 
                <p style={{fontWeight:'600'}}>Take a moment to rate your web experience with us: <br /><Rating name="pristine" value={value} style={{paddingTop:'3%', fontSize:'40px'}} onChange={(event, newValue) => {handleRatingChange()}}/></p>
                :
                <p style={{color:'green'}}>Thank you for your valuable feedback!</p>
              }
              <p style={{lineHeight:'1.6', width:'90%'}}>Your appointment details are as shown. You can add the booking to your favourite calendar.</p>
              <Button variant="outlined" href={string} className={classes.button}>Add to Google calendar</Button>
            </Grid>
            <Grid item lg={5} md={5} sm={8} xs={10} style={{background:`url(${calendar})`, backgroundRepeat:'no-repeat', backgroundPosition:'0% 100%', backgroundSize:'60% 60%'}}>
              <ImageSVG style={{float:'right'}}/>
            </Grid>
            <Grid item lg={12}>
              <Footer top="-2%" bottom="-2%" left="8%" right="-30%"/>
            </Grid>
          </Grid>
      </Fade>
    );
}

export default Success;


/*



*/
