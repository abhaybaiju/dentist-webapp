import React from 'react';
import {Grid, Button, Card, CardContent, makeStyles, Paper} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
//import Carousel from 'react-responsive-carousel';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import Navbar from './Navbar';
import Footer from './Footer';
import img from './images/bg.svg';
import img1 from './images/patterns-bg.svg';
import img2 from './images/blob1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faPaperPlane, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import './css/Services.css';
import Fade from 'react-reveal/Fade';


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
    },
    card: {
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      transition: '0.5s',
      "&:hover": {
        boxShadow: '0 32px 32px 0 rgba(0,0,0,0.2)'
      },
    },
    hover:{}
  }));

  const classes = useStyles();

  var reviews = [
        {
            name: "Random Name #1",
            description: "Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.",
            img: require('./images/Shambhavi.png')
        },
        {
            name: "Random Name #2",
            description: "Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.",
            img: require('./images/Shambhavi.png')
        },
        {
            name: "Random Name #3",
            description: "Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.",
            img: require('./images/Shambhavi.png')
        },
        {
            name: "Random Name #4",
            description: "Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.",
            img: require('./images/Shambhavi.png')
        },
        {
            name: "Random Name #5",
            description: "Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.",
            img: require('./images/Shambhavi.png')
        }
  ]

  return(
    <Grid style={{overflowX:'hidden'}}>
      <Grid container justify="center" alignItems="center" style={{background:`url(${img})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}} spacing={0}>
        <Grid item lg={12}>
          <Navbar />
        </Grid>
        <Grid item lg={6} style={{marginTop:'-2%'}}>
          <Fade duration={1000} bottom>
            <h1 style={{color:'#2f2b4f'}}>What can you expect?</h1>
            <p style={{lineHeight:'2.5', marginRight:'45%', textAlign:'justify', marginTop:'10%', color:'#404040'}}>Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.</p>
            <Button style={{marginLeft:'10%', marginTop:'5%'}}>Book now</Button>
          </Fade>
        </Grid>
        <Grid item lg={6} style={{marginBottom:'21%', marginTop:'17%', background:'transparent', marginRight:'-10%'}}>
          <Fade duration={1000} bottom>
            <img src={require('./images/features.svg')} alt="" height="350"/>
          </Fade>
        </Grid>
      </Grid>
      <Grid container justify="space-evenly" alignItems="center" spacing={2}>
        <Grid item lg={12}>
          <Fade duration={1000} bottom>
            <p style={{color:'grey', textTransform:'uppercase', fontSize:'15px', fontWeight:'600', textAlign:'center'}}>Our Services</p>
            <h1 style={{color:'#2f2b4f', textAlign:'center'}}>What We Bring To You</h1>
            <hr style={{width:'5%', textAlign:'center', border:'3px solid #99daff', marginBottom:'5%'}}/>
          </Fade>
        </Grid>
        <Grid item lg={5} style={{marginLeft:'5%', marginBottom:'10%'}}>
          <Fade duration={1000} bottom>
            <img src={require('./images/sharing_articles.svg')} alt="" height="350"/>
          </Fade>
        </Grid>
        <Grid item lg={5} style={{marginRight:'5%', marginLeft:'5%', marginBottom:'10%'}}>
          <Fade duration={1000} bottom>
            <h1 style={{color:'#3f3d56', textAlign:'center'}}>Service 1</h1>
            <p style={{textAlign:'justify', lineHeight:'2.5', color:'#404040'}}>Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.</p>
          </Fade>
        </Grid>
        <Grid item lg={5} style={{marginRight:'5%', marginLeft:'5%', marginBottom:'10%'}}>
          <Fade duration={1000} bottom>
            <h1 style={{color:'#3f3d56', textAlign:'center'}}>Service 2</h1>
            <p style={{textAlign:'justify', lineHeight:'2.5', color:'#404040'}}>Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.</p>
          </Fade>
        </Grid>
        <Grid item lg={5} style={{marginLeft:'5%', marginBottom:'10%'}}>
          <Fade duration={1000} bottom>
            <img src={require('./images/sharing_articles.svg')} alt="" height="350"/>
          </Fade>
        </Grid>
        <Grid item lg={5} style={{marginLeft:'5%', marginBottom:'15%'}}>
          <Fade duration={1000} bottom>
            <img src={require('./images/sharing_articles.svg')} alt="" height="350"/>
          </Fade>
        </Grid>
        <Grid item lg={5} style={{marginRight:'5%', marginLeft:'5%', marginBottom:'15%'}}>
          <Fade duration={1000} bottom>
            <h1 style={{color:'#3f3d56', textAlign:'center'}}>Service 3</h1>
            <p style={{textAlign:'justify', lineHeight:'2.5', color:'#404040'}}>Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.</p>
          </Fade>
        </Grid>
      </Grid>
      <Grid container justify="space-evenly" alignItems="stretch" style={{background:`url(${img1})`, backgroundSize:'cover', marginTop:'-5%'}}>
        <Grid item lg={12}>
          <Fade duration={1000} bottom>
            <h1 style={{color:'#2f2b4f', textAlign:'center'}}>Features</h1>
            <hr style={{width:'5%', textAlign:'center', border:'3px solid #99daff', marginBottom:'5%'}}/>
          </Fade>
        </Grid>
        <Grid item lg={3} style={{marginRight:'-10%'}}>
          <Fade duration={1000} bottom>
            <Card style={{marginRight:'5%'}} classes={{root:classes.card, hover:classes.hover}}>
              <CardContent className={classes.cardContent}>
                <Grid className={classes.cardMedia}>
                  <FontAwesomeIcon icon={faComment} className={classes.cardIcon}/>
                </Grid>
                <h3 style={{textAlign:'left', color:'#3f3d56'}}>Ensuring clear communication</h3>
                We keep you in the loop every step of the way. You can rely on a transparent, comprehensible flow of information.
              </CardContent>
            </Card>
          </Fade>
        </Grid>
        <Grid item lg={3} style={{marginRight:'-10%'}}>
          <Fade duration={1000} delay={150} bottom>
            <Card style={{marginRight:'5%'}} classes={{root:classes.card, hover:classes.hover}}>
              <CardContent className={classes.cardContent}>
                <Grid className={classes.cardMedia}>
                  <FontAwesomeIcon icon={faPaperPlane} className={classes.cardIcon}/>
                </Grid>
                <h3 style={{textAlign:'left', color:'#3f3d56'}}>Making the most of technology</h3>
                Time is precious. We guarantee a high degree of efficiency and a premium level of service by using the right tools.
              </CardContent>
            </Card>
          </Fade>
        </Grid>
        <Grid item lg={3}>
          <Fade duration={1000} delay={300} bottom>
            <Card style={{marginRight:'5%'}} classes={{root:classes.card, hover:classes.hover}}>
              <CardContent className={classes.cardContent}>
                <Grid className={classes.cardMedia}>
                  <FontAwesomeIcon icon={faHeart} className={classes.cardIcon}/>
                </Grid>
                <h3 style={{textAlign:'left', color:'#3f3d56'}}>Providing excellent customer experience</h3>
                We are passionate about what we do and we take pride in achieving the personalised results that you have in mind.
              </CardContent>
            </Card>
          </Fade>
        </Grid>
      </Grid>
      <Grid container justify="space-evenly" alignItems="stretch" style={{marginTop:'10%'}}>
        <Grid item lg={12}>
          <Fade duration={1000} bottom>
            <h1 style={{color:'#2f2b4f', textAlign:'center'}}>{/*What Our Customers Say About Us */}Take a look at what our customers say</h1>
            <hr style={{width:'5%', textAlign:'center', border:'3px solid #99daff', marginBottom:'5%'}}/>
          </Fade>
        </Grid>
        <Grid item lg={5}>
          <Fade duration={1000} bottom>
            <img src={require('./images/customer_review.svg')} alt="" height="300" style={{marginLeft:'20%', marginTop:'10%'}}/>
          </Fade>
        </Grid>
        <Grid item lg={4}>
        <Fade duration={1000} bottom>
          <Carousel interval={3000} indicators={false} animation="slide" navButtonsAlwaysVisible={true}>
            {reviews.map( (review, i) =>
              <Card style={{marginLeft:'-2.5%', marginRight:'-2.5%'}}>
                <CardContent>
                  <Paper style={{textAlign:'center', height:300, padding:'10%'}}>
                    <p style={{ background:'#e2e1ea', borderRadius:'18px', width:'10%', marginLeft:'40%', padding:'5%', marginTop:'-5%'}}><FontAwesomeIcon icon={faQuoteRight} style={{fontSize:'40px', color:'#3f3d56'}}/></p>
                    <p style={{color:'#404040', lineHeight:'1.8', marginLeft:'10%', marginRight:'10%', marginTop:'10%', textAlign:'justify', marginBottom:'10%'}}>{review.description}</p>
                    <img src={review.img} alt="" height="35" width="35" style={{border:'1px solid #e2e1ea', borderRadius:'50%', float:'left', marginLeft:'30%', marginTop:'-1%', marginRight:'-10%'}}/>
                    <p style={{color:'#404040'}}>{review.name}</p>
                  </Paper>
                </CardContent>
              </Card>
             )}
          </Carousel>
          </Fade>
        </Grid>
      </Grid>
      <Footer top="8%" bottom="2%" left="7%" right="-35%"/>
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
