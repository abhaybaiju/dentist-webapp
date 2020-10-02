import React from 'react';
import {Grid} from '@material-ui/core';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/AboutUs.css';

const AboutUs = () => {
  return(
    <Grid style={{overflowX:'hidden'}}>
      <div className="custom-shape-divider-top-1601571914">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="svg">
          <defs>
            <linearGradient id="grad1" x1="0" y1="0" x2="12.8" y2="0">
              <stop offset="5%" className="style1"/>
              <stop offset="10%" className="style2"/>
            </linearGradient>
          </defs>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="url(#grad1)"></path>
        </svg>
      </div>
      <Grid>
        <Navbar/>
      </Grid>
      <Grid container justify="space-evenly" alignItems="center" style={{marginTop:'8%', position:'sticky'}}>
        <Grid item lg={5} style={{color:'#3f3d56', marginLeft:'3%', marginRight:'-15%'}}>
          <h1>Are you getting the right treatment?</h1>
          <p style={{lineHeight:'1.6'}}>Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.</p>
        </Grid>
        <Grid item lg={6} style={{marginTop:'-2%', marginLeft:'15%', marginRight:'-18%'}}>
          <img src={require('./images/dentist.png')} alt="" height="550"/>
        </Grid>
      </Grid>
      <Grid>
        <p style={{textTransform:'uppercase', textAlign:'center'}}>Our Mission</p>
        <h2></h2>
      </Grid>
      <Footer top="20%" bottom="2%" left="15%" right="0%"/>
    </Grid>
  );
}

export default AboutUs;
