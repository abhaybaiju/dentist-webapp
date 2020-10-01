import React from 'react';
import {Grid} from '@material-ui/core';
import './css/Footer.css';

const Footer = (props) => {
  return(
    <footer style={{color:'#8898aa', fontSize:'14px', marginLeft:props.left, marginRight:props.right, marginBottom:props.bottom, marginTop:props.top}}>
      <Grid container justify="space-evenly" alignItems="center">
        <Grid item lg={6}>
            © 2020{" "}
            <a href="/" style={{fontWeight:'600', marginLeft:'5%'}} className="a">
              Lila Dental Clinic
            </a>
        </Grid>
        <Grid item lg={6}>
            <a href="/" className="a" style={{fontWeight:'600', marginLeft:'5%'}}>
              Lila Dental Clinic
            </a>
            <a href="/About" className="a" style={{fontWeight:'600', marginLeft:'5%'}}>
              About Us
            </a>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
