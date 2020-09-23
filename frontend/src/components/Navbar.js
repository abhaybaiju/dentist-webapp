import React from 'react';
import {Grid, AppBar, Toolbar, Typography} from '@material-ui/core';
import './css/Navbar.css';

const Navbar = () => {
  return(
    <Grid>
      <AppBar title="Dental-app" style={{backgroundColor:'transparent', color:'grey', boxShadow: 'none'}}>
        <Toolbar style={{ marginLeft:'10%', marginRight:'10%', marginTop:'1%'}}>
          <Grid container justify="flex-start" alignItems="center">
            <Typography className="cursor">
              <img alt="..." src={require("./images/logo.png")} height="50" style={{transform: 'rotate(-90deg)'}}/>
            </Typography>
            <Typography style={{marginLeft:'3%', color: 'grey', fontWeight:'bold'}}>
              LILA DENTAL CLINIC
            </Typography>
          </Grid>
          <Grid container justify="space-evenly" spacing={3}>
            <Grid item className="cursor">
              <Typography>Home</Typography>
            </Grid>
            <Grid item className="cursor">
              <Typography>About Us</Typography>
            </Grid>
            <Grid item className="cursor">
              <Typography>Services</Typography>
            </Grid>
            <Grid item className="cursor">
              <Typography>Our Specialists</Typography>
            </Grid>
            <Grid item className="cursor">
              <Typography>Blog</Typography>
            </Grid>
            <Grid item className="cursor">
              <Typography>Contact Us</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default Navbar;
