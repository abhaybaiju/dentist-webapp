import React from 'react';
import {Grid, AppBar, Toolbar, Typography, makeStyles, Hidden} from '@material-ui/core';
//import './css/Navbar.css';
import {Link} from 'react-router-dom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import SideDrawer from "./SideDrawer.js";


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
      padding: '0 0',
    },
    appBarScrolled: {
      backgroundColor: 'rgba(248,250,249,0.9)',
      color:'grey',
      boxShadow: 'none',
      transition: theme.transitions.create(['background-color'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.standard
      })
    },
    a: {
      color:'#4d4a68',
      textDecoration:'none',
      "&:hover": {
        color:'#2c2a3c'
      }
    },
    aScrolled: {
      color:'grey',
      textDecoration:'none',
      "&:hover": {
        color:'#3f3d56'
      }
    },
    btn: {
      color:'#3f3d56',
      border: '1px solid #3f3d56',
      background:'rgba(248,250,249,0.9)',
      borderRadius:'4px',
      textDecoration:'none',
      padding:'4% 6%',
      "&:hover": {
        color:'white',
        border: '1px solid #3f3d56',
        background:'#3f3d56',
      }
    },
    btnScrolled: {
      color:'#f2fcfe',
      border: '1px solid #d67477',
      background:'#d67477',
      borderRadius:'4px',
      textDecoration:'none',
      padding:'4% 6%',
      "&:hover": {
        color:'#f2fcfe',
        border: '1px solid #3f3d56',
        background:'#3f3d56'
      }
    },
    hover:{},
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
      <AppBar lg={12} title="Dental-app" className={`${classes.appBar} ${
          trigger === false ? '' : classes.appBarScrolled
        }`}>
        <Toolbar style={{ marginLeft:'0%', marginRight:'0%', marginTop:'1%'}}>
          <Grid container justify="flex-end" alignItems="center" lg={2} md={2} sm={2} xs={2}>
            <Typography>
              <Link to="/"><img alt="..." src={require("./images/logo.png")} height="50" style={{transform: 'rotate(-90deg)', cursor:'pointer'}}/></Link>
            </Typography>
          </Grid>
          <Grid container justify="flex-start" alignItems="center" lg={4} md={4} sm={4} xs={4}>
            <Hidden xsDown>
              <Typography style={{marginLeft:'8%', fontWeight:'bold', color:'#3f3d56'}}>
                  LILA DENTAL CLINIC
              </Typography>
            </Hidden>
          </Grid>
          <Hidden smDown>
            <Grid container justify="flex-end" alignItems="flex-right" spacing={4} lg={12} md={12}>
                <Grid item >
                  <a href="/" title="Home" className={`${classes.a} ${trigger === false ? '' : classes.aScrolled}`}>Home</a>
                </Grid>
                <Grid item >
                  <a href="/About" title="About us" className={`${classes.a} ${trigger === false ? '' : classes.aScrolled}`}>About Us</a>
                </Grid>
                <Grid item >
                  <a href="/Services" title="Services" className={`${classes.a} ${trigger === false ? '' : classes.aScrolled}`}>Services</a>
                </Grid>
                <Grid item >
                  <a href="/Contact" title="Contact Us" className={`${classes.a} ${trigger === false ? '' : classes.aScrolled}`}>Contact Us</a>
                </Grid>
                <Grid item lg={4} md={4}>
                  <a href="/Book" title="Book now" className={`${classes.btn} ${trigger === false ? '' : classes.btnScrolled}`}>Book Now</a>
                </Grid>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid item sm={4} xs={4}>
            </Grid>
            <SideDrawer />
          </Hidden>
        </Toolbar>
      </AppBar>
  );
}

export default Navbar;


/*


  <Grid item sm={4} xs={4}>
    <a href="/Book" title="Book now" className={`${classes.btn} ${trigger === false ? '' : classes.btnScrolled}`}>Book Now</a>
  </Grid>


*/
