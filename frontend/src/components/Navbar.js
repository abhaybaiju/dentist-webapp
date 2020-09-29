import React from 'react';
import {Grid, AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';
import './css/Navbar.css';
import {Link} from 'react-router-dom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


//317e96
const Navbar = () => {

  const useStyles = makeStyles((theme) => ({
    appBar: {
      backgroundColor: 'transparent',
      color:'grey',
      boxShadow: 'none',
      transition: theme.transitions.create(['background-color'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.standard
      }),
      padding: '0 20px',
    },
    appBarScrolled: {
      backgroundColor: 'rgba(248,250,249,0.6)',
      boxShadow: 'none',
      transition: theme.transitions.create(['background-color'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.standard
      })
    },
    toolbarTitle: {
      flexGrow: 1
    },
    toolbar: {
      flexWrap: 'wrap'
    },
    toolbarLogo: {
      flexGrow: 1
    },
    link: {
      margin: theme.spacing(1, 1.5)
    }
  }));

  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50
  });

  return(
    <Grid>
      <AppBar title="Dental-app" className={`${classes.appBar} ${
          trigger === false ? '' : classes.appBarScrolled
        }`}>
        <Toolbar style={{ marginLeft:'10%', marginRight:'10%', marginTop:'1%'}}>
          <Grid container justify="flex-start" alignItems="center">
            <Typography>
              <Link to="/"><img alt="..." src={require("./images/logo.png")} height="50" style={{transform: 'rotate(-90deg)', cursor:'pointer'}}/></Link>
            </Typography>
            <Typography style={{marginLeft:'3%', fontWeight:'bold'}}>
                LILA DENTAL CLINIC
            </Typography>
          </Grid>
          <Grid container justify="space-evenly" spacing={3}>
              <a href="/">Home</a>
              <a href="/">About Us</a>
              <a href="/">Services</a>
              <a href="/">Our Specialists</a>
              <a href="/">Blog</a>
              <a href="/Contact">Contact Us</a>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default Navbar;
