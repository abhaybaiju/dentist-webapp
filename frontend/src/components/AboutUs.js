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
      <Grid container justify="space-evenly" alignItems="flex-start" style={{marginTop:'10%'}} spacing={0}>
        <Grid item lg={2} style={{marginLeft:'-10%'}}>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" height="1600" width="1000">
            <defs>
              <linearGradient id="grad2" x1="0" y1="0" x2="11" y2="0">
                <stop offset="0%" className="style2"/>
                <stop offset="10%" className="style1"/>
              </linearGradient>
            </defs>
            <rect fill="url(#grad2)" width="80" height="80" rx="8" style={{transform:'rotate(-45deg)'}}/>
          </svg>
        </Grid>
        <Grid item lg={5} style={{marginTop:'10%'}}>
          <img src={require('./images/people.svg')} alt="" height="300" width="450" style={{background:'white', border:'10px solid #e6e6e6', borderRadius:'20px'}}/>
        </Grid>
        <Grid item lg={4} style={{marginTop:'2%'}}>
          <p style={{color:'grey', textTransform:'uppercase', fontSize:'15px', fontWeight:'600'}}>About Us</p>
          <h1 style={{color:'#ff7a59', marginBottom:'5%', marginTop:'-1%'}}>Our journey</h1>
          <ul style={{marginRight:'10%'}}>
            <li>Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.</li>
            <li>Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.</li>
            <li>Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.</li>
          </ul>
        </Grid>
      </Grid>
      <Footer top="20%" bottom="2%" left="15%" right="-25%"/>
    </Grid>
  );
}

export default AboutUs;

//<path fill="url(#grad2)" d="M56.5,-65.3C70.9,-55.3,78.6,-35.2,82.2,-14.6C85.7,6.1,85,27.4,75.7,43.7C66.3,60,48.2,71.3,28.8,77.8C9.4,84.3,-11.2,86,-27.1,78.5C-43,71,-54.2,54.3,-63.1,37.2C-71.9,20.1,-78.6,2.6,-77.6,-15.5C-76.6,-33.6,-68,-52.2,-53.8,-62.3C-39.6,-72.4,-19.8,-74,0.6,-74.7C21.1,-75.5,42.1,-75.4,56.5,-65.3Z" transform="translate(100 100)" />
