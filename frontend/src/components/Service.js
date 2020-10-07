import React from 'react';
import {Grid, Button} from '@material-ui/core';
import Navbar from './Navbar';
import Footer from './Footer';
import img from './images/bg.svg';
//import img1 from './images/wavesOpacity.svg';
import './css/Services.css';

const Service = () => {
  return(
    <Grid style={{overflowX:'hidden'}}>
      <Grid container justify="center" alignItems="center" style={{background:`url(${img})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}} spacing={0}>
        <Grid item lg={12}>
          <Navbar />
        </Grid>
        <Grid item lg={6} style={{marginBottom:'20%', marginTop:'-15%', marginRight:'0%'}}>
          <h1>What can you expect?</h1>
          <p style={{lineHeight:'2.5', marginRight:'45%', textAlign:'justify', marginTop:'10%'}}>Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.</p>
          <Button style={{marginLeft:'10%', marginTop:'5%'}}>Book now</Button>
        </Grid>
        <Grid item lg={6} style={{marginBottom:'50%', marginTop:'15%', background:'transparent', marginRight:'-10%'}}>
          <img src={require('./images/features.svg')} alt="" height="350"/>
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
