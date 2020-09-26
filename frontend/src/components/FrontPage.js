import React from 'react';
import {Container, Grid,Button} from '@material-ui/core';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import './css/FrontPage.css';

const FrontPage = () => {
  return(
    <Container>
      <div class="custom-shape-divider-bottom-1601099806">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
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
