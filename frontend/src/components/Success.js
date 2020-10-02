import React from 'react';
import {Container, Grid, Table, TableRow, TableCell, Button, makeStyles} from '@material-ui/core';
import Navbar from './Navbar';
import { ThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles';
import { useStateValue } from './StateProvider.js';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Footer from './Footer';

const Success = () => {

  const theme = createMuiTheme({
    overrides: {
        MuiTableCell: {
            root: {  //This can be referred from Material UI API documentation.
                padding: '10px 8px',
            },
        },
    },
  });

  const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
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
  },
  table: {
    position:'sticky',
    backgroundColor:'#f1f4f7',
    border: '1px solid #027e97',
    width:'100%',
    color: '#027e97',
  },
  tableRow: {
    border:'none'
  }
}));

const Display = () => {
    const classes = useStyles();
    const date = new Date(localStorage.getItem('globalDate'));
    const time = localStorage.getItem('globalTime');
    console.log(date.toDateString());
    const hours = parseInt(parseInt(time)/100);
    const minutes = parseInt(parseInt(time)%100);
    console.log(hours,minutes);
    date.setHours(hours,minutes,0);
    const startDate = date.toISOString();
    date.setHours(hours,minutes+15,0);
    const endDate = date.toISOString();
    const string = "http://www.google.com/calendar/event?action=TEMPLATE&dates=" + startDate + "%2F" + endDate + "&text=Dentist%20Appointment&location=Lila%20Dental%20Clinic%20Dg-2%2F57-a%2C%20Dda%20Flats%2C%20Vikaspuri%2C%20Vikaspuri%2C%20Delhi%2C%20110018&details=Appointment%20at%20Lila%20Dental%20Clinic";
    return(
        <Grid style={{overflowX:'hidden'}}>
          <Grid>
            <Navbar/>
          </Grid>
          <Grid container alignItems="center" justify="space-evenly" style={{marginTop:'-12%', marginBottom:'2%', marginLeft:'-5%'}}>
            <Grid item lg={4} style={{color:'#027e97', marginTop:'15%', marginLeft:'-15%'}}>
              <h1 style={{lineHeight:'1.3', marginLeft:'2%'}}>Appointment booked successfully!</h1>
              <Grid item lg={8}>
                <p style={{lineHeight:'1.6', marginLeft:'2%'}}>Your appointment details are as shown. You can add the booking to your favourite calendar.</p>
              </Grid>
              <Button variant="outlined" href="http://www.google.com/calendar/event?action=TEMPLATE&dates=20200924T073000Z%2F20200924T074500Z&text=Dentist%20Appointment&location=Lila%20Dental%20Clinic%20Dg-2%2F57-a%2C%20Dda%20Flats%2C%20Vikaspuri%2C%20Vikaspuri%2C%20Delhi%2C%20110018&details=Appointment%20at%20Lila%20Dental%20Clinic"
               className={classes.button}>Add to Google calendar</Button>
            </Grid>
            <Grid item lg={1} style={{marginTop:'30%', marginLeft:'-20%'}}>
              <img alt="..." src={require('./images/calendar.svg')} height="400" style={{marginTop:'0%'}}/>
            </Grid>
            <Grid item lg={3} style={{marginLeft:'-40%', marginTop:'-12.5%'}}>
              <ThemeProvider theme={theme}>
                <Table className={classes.table}>
                  <TableRow>
                    <TableCell style={{border:'none', fontSize:'13px', height:'1%', width: '55%', color:'#787878'}}>Appointment Details</TableCell>
                    <TableCell style={{border:'none', fontSize:'13px', height:'1%', color:'#787878'}}>Service</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{border:'none', fontSize:'15px', paddingTop:'-2%', fontWeight:'bold'}} component="td" scope="row">{localStorage.getItem('globalDate')}&nbsp;&nbsp;<FiberManualRecordIcon style={{fontSize:'12px'}}/>&nbsp;&nbsp;{localStorage.getItem('globalDate')}</TableCell>
                    <TableCell style={{border:'none', fontSize:'15px', fontWeight:'bold'}}>Dental Booking</TableCell>
                  </TableRow>
                </Table>
              </ThemeProvider>
            </Grid>
            <Grid item lg={1} style={{marginTop:'10%', marginLeft:'-60%'}}>
              <img alt="..." src={require('./images/woman.svg')} height="800" style={{marginTop:'0%'}}/>
            </Grid>
          </Grid>
          <Footer top="0%" bottom="2%" left="12%" right="-30%"/>
        </Grid>
    );
  }

  return(
    <Display />
  )
}

export default Success;
