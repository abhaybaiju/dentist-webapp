import React from 'react';
import {Container, Grid, Table, TableRow, TableCell, Button, makeStyles} from '@material-ui/core';
import Navbar from './Navbar';
import { ThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles';
import { useStateValue } from './StateProvider.js';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Success = () => {

  const theme = createMuiTheme({
    overrides: {
        MuiTableCell: {
            root: {  //This can be referred from Material UI API documentation.
                padding: '8px 8px',
            },
        },
    },
  });

  const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    background: 'linear-gradient(to right, #7474BF 0%, #348AC7  51%, #7474BF 100%)',
    color: 'white',
    transition: '0.5s',
    boxShadow: '0 0 20px #eee',
    borderRadius: '10px',
    padding: '15px 45px',
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
    marginTop:'-19.1%',
    position:'fixed',
    backgroundColor:'#f1f4f7',
    border: '1px solid #027e97',
    width:'30%',
    color: '#027e97',
  },
  tableRow: {
    border:'none'
  },
  img: {
    marginTop:'40%',
  }
}));

const Display = () => {
    const classes = useStyles();
    const [{globalName}, dispatch] = useStateValue();
    console.log(globalName);

    return(
      <Container>
        <Grid>
          <Grid>
            <Navbar/>
          </Grid>
          <Grid container alignItems="center" justify="space-evenly" >
            <Grid item lg={4} style={{color:'#027e97', marginTop:'15%'}}>
              <h1 style={{lineHeight:'1.3'}}>Appointment booked successfully!</h1>
              <Grid item lg={8}>
                <p style={{lineHeight:'1.6'}}>Your appointment details are as shown. You can add the booking to your favourite calendar.</p>
              </Grid>
              <Button variant="outlined" href="http://www.google.com/calendar/event?action=TEMPLATE&dates=20200924T073000Z%2F20200924T074500Z&text=Dentist%20Appointment&location=Lila%20Dental%20Clinic%20Dg-2%2F57-a%2C%20Dda%20Flats%2C%20Vikaspuri%2C%20Vikaspuri%2C%20Delhi%2C%20110018&details=Appointment%20at%20Lila%20Dental%20Clinic"
               className={classes.button}>Add to Google calendar</Button>
            </Grid>
            <Grid item lg={5}>
              <img alt="..." src={require('./images/Calendar_object.png')} height="200" width="230" className={classes.img}/>
              <img alt="..." src={require('./images/woman_presenting.png')} height="400" className={classes.img}/>
              <ThemeProvider theme={theme}>
                <Table className={classes.table}>
                  <TableRow>
                    <TableCell style={{border:'none', fontSize:'13px', height:'1%', width: '55%', color:'#787878'}}>Appointment Details</TableCell>
                    <TableCell style={{border:'none', fontSize:'13px', height:'1%', color:'#787878'}}>Service</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{border:'none', fontSize:'15px', paddingTop:'-2%', fontWeight:'bold'}} component="td" scope="row">{globalName}&nbsp;&nbsp;<FiberManualRecordIcon style={{fontSize:'12px'}}/>&nbsp;&nbsp;{globalName}</TableCell>
                    <TableCell style={{border:'none', fontSize:'15px', fontWeight:'bold'}}>Dental Booking</TableCell>
                  </TableRow>
                </Table>
              </ThemeProvider>
            </Grid>
          </Grid>
          <Grid>
        {/*FrontPage*/}
          </Grid>
        </Grid>
      </Container>
    );
  }

  return(
    <Display />
  )
}

export default Success;
