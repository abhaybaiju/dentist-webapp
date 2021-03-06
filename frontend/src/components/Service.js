import React from 'react';
import {Grid, Button, Card, CardContent, makeStyles, Paper, Hidden} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import Navbar from './Navbar';
import Footer from './Footer';
import img from './images/bg.svg';
import img1 from './images/patterns-bg.svg';
import img2 from './images/blob1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faPaperPlane, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';


const Service = () => {

  const useStyles = makeStyles((theme) => ({
    cardMedia:{
      height:140,
      marginTop:'-10%',
      marginLeft:'15%',
      marginBottom:'10%',
      paddingBottom:'8%',
      background:`url(${img2})`,
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat'
    },
    cardContent: {
      lineHeight:'1.8',
      textAlign:'justify',
      padding:'5% 8%',
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
    button: {
      marginTop:'5%',
      marginLeft:'8%',
      padding:'2%',
      width:'30%',
      backgroundColor: 'white',
      color:'#3f3d56',
      boxShadow:'none',
      borderRadius:'5px',
      border:'1px solid #3f3d56',
      "&:hover": {
        backgroundColor: "#2f2b4f",
        color:'white',
        borderRadius:'5px',
        borderColor:'#2f2b4f',
      },
      "&:focus": {
        backgroundColor: "#2f2b4f",
        color:'white',
        borderColor:'#2f2b4f',
      }
    },
    focus:{},
    hover:{}
  }));

  const classes = useStyles();

  var reviews = [
        {
            name: "Shambhavi Sarin",
            description: "The clinic is extremely clean and hygienic. The doctors are well-experienced and friendly. I went there for a filling and the entire process was surprisingly painless. Would definitely recommend to anyone looking for honest and affordable dental treatment in Delhi.",
            img: require('./images/Shambhavi.png')
        },
        {
            name: "Mini Subhas",
            description: "Dr Anuradha and Dr Baiju are extremely friendly and make you feel extremely at home from the moment you step into the clinic. I have been coming here for the past 20 years and now my entire family is their patient. 10/10 service overall.",
            img: require('./images/Mini_Subhash.jpg')
        },
        {
            name: "Krishna Gupta",
            description: "Best clinic in West Delhi. Friendly staff, excellent doctors and affordable treatments. Would definitely recommend it.",
            img: require('./images/Krishna_Gupta.jpg')
        }
  ]

  return(
    <Grid style={{overflowX:'hidden'}}>
      <Grid container justify="space-evenly" alignItems="center" style={{background:`url(${img})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', paddingBottom:'15%'}} spacing={2}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Navbar />
        </Grid>
        <Grid item lg={5} md={8} sm={10} xs={10} style={{marginTop:'10%', textAlign:'center'}}>
          <Fade duration={1000} bottom>
            <h1 style={{color:'#2f2b4f'}}>Wondering what we offer?</h1>
            <p style={{lineHeight:'2.5', marginRight:'0%', textAlign:'justify', marginTop:'10%', color:'#404040', fontSize:'20px'}}>Look no further. From advanced treatments like implants to minor ones like fillings, we’ve got you covered. Keep scrolling to know more.</p>
            <Button className={classes.button}>Book now</Button>
          </Fade>
        </Grid>
        <Grid item lg={5} md={10} sm={12} xs={10} style={{marginBottom:'0%', marginTop:'10%', background:'transparent', marginRight:'0%'}}>
          <Fade duration={1000} bottom>
            <img src={require('./images/product.svg')} alt="" height="350" width="100%"/>
          </Fade>
        </Grid>
      </Grid>
      <Grid container justify="space-evenly" alignItems="center" spacing={2}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Fade duration={1000} bottom>
            <p style={{color:'grey', textTransform:'uppercase', fontSize:'15px', fontWeight:'600', textAlign:'center'}}>Our Services</p>
            <h1 style={{color:'#2f2b4f', textAlign:'center'}}>What We Offer</h1>
            <hr style={{width:'5%', textAlign:'center', border:'3px solid #99daff', marginBottom:'5%'}}/>
          </Fade>
        </Grid>
        <Grid item lg={5} md={6} sm={8} xs={10} style={{marginLeft:'0%', marginBottom:'10%', textAlign:'center'}}>
          <Fade duration={1000} bottom>
            <img src={require('./images/one.png')} alt="" height="350" width="70%"/>
          </Fade>
        </Grid>
        <Grid item lg={5} md={10} sm={10} xs={10} style={{marginRight:'5%', marginLeft:'5%', marginBottom:'10%'}}>
          <Fade duration={1000} bottom>
            <h1 style={{color:'#3f3d56', textAlign:'center'}}>General Procedures</h1>
            <p style={{textAlign:'justify', lineHeight:'2.5', color:'#404040', fontSize:'20px'}}>We offer a host of general treatment procedures including scaling, root planning and restorative procedures like fillings. We also provide for the replacement of missing teeth through both removable and fixed fixtures.</p>
          </Fade>
        </Grid>
        <Hidden lgUp>
        <Grid item lg={5} md={6} sm={8} xs={10} style={{marginLeft:'0%', marginBottom:'10%', textAlign:'center'}}>
          <Fade duration={1000} bottom>
            <img src={require('./images/two.png')} alt="" height="350" width="70%"/>
          </Fade>
        </Grid>
        </Hidden>
        <Grid item lg={5} md={10} sm={10} xs={10} style={{marginRight:'5%', marginLeft:'5%', marginBottom:'10%'}}>
          <Fade duration={1000} bottom>
            <h1 style={{color:'#3f3d56', textAlign:'center'}}>Specialized Procedures</h1>
            <p style={{textAlign:'justify', lineHeight:'2.5', color:'#404040', fontSize:'20px'}}>Specialised procedures include gum surgeries or gingival surgeries, depigmentation or black gums treatment and treatment for periodontitis also called as the treatment of pyorrhea.</p>
          </Fade>
        </Grid>
        <Hidden mdDown>
        <Grid item lg={5} md={6} sm={8} xs={10} style={{marginLeft:'0%', marginBottom:'10%', textAlign:'center'}}>
          <Fade duration={1000} bottom>
            <img src={require('./images/two.png')} alt="" height="350" width="70%"/>
          </Fade>
        </Grid>
        </Hidden>
        <Grid item lg={5} md={6} sm={8} xs={10} style={{marginLeft:'0%', marginBottom:'15%', textAlign:'center'}}>
          <Fade duration={1000} bottom>
            <img src={require('./images/three.png')} alt="" height="350" width="70%"/>
          </Fade>
        </Grid>
        <Grid item lg={5} md={10} sm={10} xs={10} style={{marginRight:'5%', marginLeft:'5%', marginBottom:'15%'}}>
          <Fade duration={1000} bottom>
            <h1 style={{color:'#3f3d56', textAlign:'center'}}>Advanced Procedures</h1>
            <p style={{textAlign:'justify', lineHeight:'2.5', color:'#404040', fontSize:'20px'}}>We also offer advanced and complex treatment procedures like bone substitutes or bone grafts. Cosmetic procedures like cosmetic fillings also come under the host of advanced procedures that one can opt for. Another popular treatment is the dental implant which has become the most sought after and effective method to replace teeth.</p>
          </Fade>
        </Grid>
      </Grid>
      <Grid container justify="space-evenly" alignItems="stretch" style={{background:`url(${img1})`, backgroundSize:'cover', marginTop:'-5%'}}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Fade duration={1000} bottom>
            <h1 style={{color:'#2f2b4f', textAlign:'center'}}>Features</h1>
            <hr style={{width:'5%', textAlign:'center', border:'3px solid #99daff', marginBottom:'0%'}}/>
          </Fade>
        </Grid>
        <Grid item lg={3} md={3} sm={5} xs={10} style={{marginTop:'8%'}}>
          <Fade duration={1000} bottom>
            <Card style={{marginRight:'0%'}} classes={{root:classes.card, hover:classes.hover}}>
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
        <Grid item lg={3} md={3} sm={5} xs={10} style={{marginTop:'8%'}}>
          <Fade duration={1000} delay={150} bottom>
            <Card style={{marginRight:'0%'}} classes={{root:classes.card, hover:classes.hover}}>
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
        <Grid item lg={3} md={3} sm={5} xs={10} style={{marginTop:'8%'}}>
          <Fade duration={1000} delay={300} bottom>
            <Card style={{marginRight:'0%'}} classes={{root:classes.card, hover:classes.hover}}>
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
        <Grid item lg={12} md={10} sm={10} xs={10}>
          <Fade duration={1000} bottom>
            <h1 style={{color:'#2f2b4f', textAlign:'center'}}>{/*What Our Customers Say About Us */}Take a look at what our customers say</h1>
            <hr style={{width:'5%', textAlign:'center', border:'3px solid #99daff', marginBottom:'5%'}}/>
          </Fade>
        </Grid>
        <Grid item lg={5} md={5} sm={10} xs={10} style={{textAlign:'center'}}>
          <Fade duration={1000} bottom>
            <img src={require('./images/customer_review.svg')} alt="" height="300" width="100%" style={{marginLeft:'0%', marginTop:'10%'}}/>
          </Fade>
        </Grid>
        <Grid item lg={4} md={5} sm={10} xs={10}>
          <Fade duration={1000} bottom>
            <Carousel interval={3000} indicators={false} animation="slide" navButtonsAlwaysVisible={true}>
              {reviews.map( (review, i) =>
                <Card style={{marginLeft:'-2.5%', marginRight:'-2.5%'}}>
                  <CardContent>
                    <Paper style={{textAlign:'center', height:'100%', padding:'10% 10%'}}>
                      <p style={{ background:'#e2e1ea', borderRadius:'18px', width:'10%', marginLeft:'40%', padding:'5%', marginTop:'-5%'}}><FontAwesomeIcon icon={faQuoteRight} style={{fontSize:'3.5vh', color:'#3f3d56', textAlign:'center'}}/></p>
                      <p style={{color:'#404040', lineHeight:'1.8', marginLeft:'10%', marginRight:'10%', marginTop:'10%', textAlign:'justify', marginBottom:'10%'}}><i>{review.description}</i></p>
                      <div style={{width:'100%', textAlign:'center', paddingBottom:'5%', margin:'auto'}}>
                        <img src={review.img} alt="" height="35" width="35" style={{border:'1px solid #e2e1ea', borderRadius:'50%'}}/>
                        <p style={{color:'#404040'}}>{review.name}</p>
                      </div>
                    </Paper>
                  </CardContent>
                </Card>
               )}
            </Carousel>
          </Fade>
        </Grid>
      </Grid>
      <Footer/>
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
