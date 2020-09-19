import React from 'react';
import {Container, Grid} from '@material-ui/core';
import Navbar from './Navbar';

const FrontPage = () => {
  return(
    <Container>
      <Grid>
        <Grid>
          <Navbar/>
        </Grid>
        <Grid container alignItems="center" justify="space-evenly" style={{background:'#d3eaf0', marginTop:'8%', borderRadius:'50px'}}>
          <Grid item lg={4} style={{color:'#027e97'}}>
            <h1 style={{lineHeight:'1.3'}}>Booking appointments made easy</h1><br/>
            <Grid item lg={8}>
              <p style={{lineHeight:'1.6'}}>Hassle-free booking for you at your convenient time. Hassle-free booking for you at your convenient time.</p>
            </Grid>
          </Grid>
          <Grid item lg={5}>
            <img alt="..." src={require('./images/doctors.svg')} height="400"/>
          </Grid>
        </Grid>
        <Grid>
      {/*FrontPage*/}
        </Grid>
      </Grid>
    </Container>
  );
}

export default FrontPage;
