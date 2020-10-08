import React from 'react';
import {Grid, Button, Card, CardMedia, CardContent, makeStyles} from '@material-ui/core';
import Navbar from './Navbar';
import Footer from './Footer';
import img from './images/bg.svg';
import img1 from './images/patterns-bg.svg';
import img2 from './images/blob1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faPaperPlane, faHeart } from '@fortawesome/free-regular-svg-icons';
import './css/Services.css';

const Service = () => {

  const useStyles = makeStyles((theme) => ({
    cardMedia:{
      height:140,
      marginTop:'-10%',
      marginLeft:'15%',
      marginBottom:'10%',
      background:`url(${img2})`,
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat'
    },
    cardContent: {
      lineHeight:'1.8',
      textAlign:'justify',
      padding:'8%',
      marginBottom:'5%',
      height:350,
      color:'#666666'
    },
    cardIcon: {
      marginLeft:'26%',
      marginTop:'23%',
      fontSize: '40px',
      color:'#f4fcfe'
    }
  }));

  const classes = useStyles();

  return(
    <Grid style={{overflowX:'hidden'}}>
      <Grid container justify="center" alignItems="center" style={{background:`url(${img})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}} spacing={0}>
        <Grid item lg={12}>
          <Navbar />
        </Grid>
        <Grid item lg={6} style={{marginTop:'-2%'}}>
          <h1>What can you expect?</h1>
          <p style={{lineHeight:'2.5', marginRight:'45%', textAlign:'justify', marginTop:'10%'}}>Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.</p>
          <Button style={{marginLeft:'10%', marginTop:'5%'}}>Book now</Button>
        </Grid>
        <Grid item lg={6} style={{marginBottom:'21%', marginTop:'17%', background:'transparent', marginRight:'-10%'}}>
          <img src={require('./images/features.svg')} alt="" height="350"/>
        </Grid>
      </Grid>
      <Grid container justify="space-evenly" alignItems="stretch" style={{background:`url(${img1})`, backgroundSize:'cover', marginTop:'-5%'}}>
        <Grid item lg={12}>
          <h1 style={{color:'#3f3d56', textAlign:'center'}}>Features</h1>
          <hr style={{width:'5%', textAlign:'center', border:'3px solid #99daff', marginBottom:'5%'}}/>
        </Grid>
        <Grid item lg={3} style={{marginRight:'-10%'}}>
          <Card style={{marginRight:'5%'}}>
            <CardContent className={classes.cardContent}>
              <Grid className={classes.cardMedia}>
                <FontAwesomeIcon icon={faComment} className={classes.cardIcon}/>
              </Grid>
              <h3 style={{textAlign:'left', color:'#3f3d56'}}>Ensuring clear communication</h3>
              We keep you in the loop every step of the way. You can rely on a transparent, comprehensible flow of information.
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={3} style={{marginRight:'-10%'}}>
          <Card style={{marginRight:'5%'}}>
            <CardContent className={classes.cardContent}>
              <Grid className={classes.cardMedia}>
                <FontAwesomeIcon icon={faPaperPlane} className={classes.cardIcon}/>
              </Grid>
              <h3 style={{textAlign:'left', color:'#3f3d56'}}>Making the most of technology</h3>
              Time is precious. We guarantee a high degree of efficiency and a premium level of service by using the right tools.
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={3}>
          <Card style={{marginRight:'5%'}}>
            <CardContent className={classes.cardContent}>
              <Grid className={classes.cardMedia}>
                <FontAwesomeIcon icon={faHeart} className={classes.cardIcon}/>
              </Grid>
              <h3 style={{textAlign:'left', color:'#3f3d56'}}>Providing excellent customer service</h3>
              We are passionate about what we do and we take pride in achieving the personalised results that you have in mind.
            </CardContent>
          </Card>
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
