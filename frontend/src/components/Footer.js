import React from 'react';
import {Grid} from '@material-ui/core';
import './css/Footer.css';

const Footer = () => {
  return(
    <footer style={{color:'#8898aa', fontSize:'14px', margin:'auto', width:'100%', padding:'2% 0%'}}>
      <Grid container justify="center" alignItems="flex-end" style={{margin:'auto', textAlign:'center'}}>
        <Grid item lg={6} md={6} sm={6} xs={5} style={{margin:'auto'}}>
            <span>© 2020{" "}&emsp;</span>
            <a href="/" style={{fontWeight:'600', marginLeft:'0%'}} className="a">
              Lila Dental Clinic
            </a>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={7} style={{margin:'auto'}}>
            <a href="/" className="a" style={{fontWeight:'600', marginLeft:'0%', marginRight:'0%'}}>
              Lila Dental Clinic
            </a>
            <span>&emsp;All Rights Reserved.</span>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
