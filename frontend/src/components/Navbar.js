import React from 'react';
import {Grid, AppBar, Toolbar, Typography} from '@material-ui/core';
import './css/Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return(
    <Grid>
      <AppBar title="Dental-app" style={{backgroundColor:'transparent', color:'grey', boxShadow: 'none'}}>
        <Toolbar style={{ marginLeft:'10%', marginRight:'10%', marginTop:'1%'}}>
          <Grid container justify="flex-start" alignItems="center">
            <Typography>
              <Link to="/"><img alt="..." src={require("./images/logo.png")} height="50" style={{transform: 'rotate(-90deg)', cursor:'pointer'}}/></Link>
            </Typography>
            <Typography style={{marginLeft:'3%', color: 'grey', fontWeight:'bold'}}>
                LILA DENTAL CLINIC
            </Typography>
          </Grid>
          <Grid container justify="space-evenly" spacing={3}>
            <Grid item>
              <a href="/">Home</a>
            </Grid>
            <Grid item>
              <a href="/">About Us</a>
            </Grid>
            <Grid item>
              <a href="/">Services</a>
            </Grid>
            <Grid item>
              <a href="/">Our Specialists</a>
            </Grid>
            <Grid item>
              <a href="/">Blog</a>
            </Grid>
            <Grid item>
              <a href="/">Contact Us</a>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default Navbar;
