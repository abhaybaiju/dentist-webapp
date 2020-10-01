import React from 'react';
import {Grid} from '@material-ui/core';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/AboutUs.css';

const AboutUs = () => {
  return(
    <Grid style={{overflowX:'hidden'}}>
      <div class="custom-shape-divider-top-1601556633">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
      <Grid>
        <Navbar/>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Grid item lg={6}>
          <img src={require('./images/dentist.png')} alt="" height="400"/>
        </Grid>
        <Grid item lg={6}>
        </Grid>
      </Grid>
      <Footer top="40%" bottom="0%" left="25%" right="0%"/>
    </Grid>
  );
}

export default AboutUs;
