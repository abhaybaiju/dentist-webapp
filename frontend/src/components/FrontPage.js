import React from 'react';
import {Container, Grid,Button} from '@material-ui/core';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';

const FrontPage = () => {
  return(
    <Container>
      <Navbar />
      <Grid spacing={7} direction="row" container alignItems="center" justify="center" style={{ minHeight: '100vh'}}>
          <Grid item lg={4} style={{color:'#027e97'}}>
            <h1 style={{lineHeight:'1.3'}}>Booking appointments made easy</h1><br/>
            <Grid item lg={8}>
              <p style={{lineHeight:'1.6'}}>Hassle-free booking for you at your convenient time. Hassle-free booking for you at your convenient time.</p>
            </Grid>
            <Link to="/Book"><Button variant="outlined">Book Now</Button></Link>
          </Grid>
          <Grid item lg={5}>
            <img alt="..." src={require('./images/doctors.svg')} height="400"/>
          </Grid>
      </Grid>
    </Container>
  );
}

export default FrontPage;
