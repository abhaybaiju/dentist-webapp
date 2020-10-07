import React from 'react';
import {Grid} from '@material-ui/core';
import Navbar from './Navbar';
import Footer from './Footer';
import img from './images/bg.svg';
//import img1 from './images/wavesOpacity.svg';
import './css/Services.css';

const Service = () => {
  return(
    <Grid style={{overflowX:'hidden'}}>
      <Grid container justify="center" alignItems="center" style={{background:`url(${img})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
        <Grid item lg={12} style={{marginBottom:'8%'}}>
          <Navbar />
        </Grid>
        <Grid item lg={6} style={{marginBottom:'20%', textAlign:'center'}}>
          <h1>Services</h1>
        </Grid>
        <Grid item lg={6} style={{marginBottom:'15%', marginTop:'5%', background:'transparent'}}>
          <img src={require('./images/features.svg')} alt="" height="300"/>
        </Grid>
      </Grid>
      <Footer top="100%" bottom="2%" left="10%" right="-30%"/>
    </Grid>
  );
}

export default Service;

//style={{background:`url(${img})`, backgroundRepeat:'no-repeat', width:'100%', backgroundSize:'cover'}}
/*

<defs>
  <linearGradient id="grad1" x1="0" y1="0" x2="12.8" y2="0">
    <stop offset="5%" stop-color="#f2fcfe" stop-opacity="0.8"/>
    <stop offset="10%" stop-color="#1c92d2" stop-opacity="0.7"/>
  </linearGradient>
</defs>*/
