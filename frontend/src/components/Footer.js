import React from 'react';
import {Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './css/Footer.css';

const Footer = () => {
  return(
    <footer style={{color:'#8898aa', fontSize:'14px', margin:'auto', width:'100%', padding:'2% 0%'}}>
      <Grid container justify="center" alignItems="flex-end" style={{margin:'auto', textAlign:'center'}}>
        <Grid item lg={6} md={6} sm={6} xs={5} style={{margin:'auto'}}>
            <span>© 2020{" "}&emsp;</span>
            <Link to="/" style={{fontWeight:'600', marginLeft:'0%'}} className="a">
              Lila Dental Clinic
            </Link>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={7} style={{margin:'auto'}}>
            <Link to="/" className="a" style={{fontWeight:'600', marginLeft:'0%', marginRight:'0%'}}>
              Lila Dental Clinic
            </Link>
            <span>&emsp;All Rights Reserved.</span>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
