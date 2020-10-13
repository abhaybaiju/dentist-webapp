import React from 'react';
import {Grid, Button, makeStyles, Fade} from '@material-ui/core';
import Navbar from './Navbar';
import Footer from './Footer';
import moment from 'moment';
import ImageSVG from './image';

const Success = () => {
  const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    background: 'linear-gradient(to right, #3f3d56 0%, #9997b5 51%, #3f3d56 100%)',
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

const Display = () => {
    const classes = useStyles();
    const date = new Date(localStorage.getItem('globalDate'));
    const time = localStorage.getItem('globalTime');
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
        <Grid style={{overflowX:'hidden'}}>
          <Grid>
            <Navbar/>
          </Grid>
          <Grid container alignItems="center" justify="space-evenly" style={{marginTop:'-12%', marginBottom:'2%', marginLeft:'-5%'}} spacing={2}>
            <Grid item lg={4} style={{color:'#3f3d56', marginTop:'15%', marginLeft:'5%'}}>
              <h1 style={{lineHeight:'1.3', marginLeft:'2%'}}>Appointment booked successfully!</h1>
              <Grid item lg={8}>
                <p style={{lineHeight:'1.6', marginLeft:'2%'}}>Your appointment details are as shown. You can add the booking to your favourite calendar.</p>
              </Grid>
              <Button variant="outlined" href={string}
               className={classes.button}>Add to Google calendar</Button>
            </Grid>
            <Grid item lg={1} style={{marginTop:'30%', marginLeft:'-10%'}}>
              <img alt="..." src={require('./images/calendar.svg')} height="400" style={{marginTop:'0%'}}/>
            </Grid>
            <Grid item lg={4} style={{marginLeft:'-20%', marginTop:'12%'}}>
              <ImageSVG />
            </Grid>
          </Grid>
          <Footer top="0%" bottom="2%" left="12%" right="-30%"/>
        </Grid>
      </Fade>
    );
  }

  return(
    <Display />
  )
}

export default Success;
