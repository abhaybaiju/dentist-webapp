import React from 'react';
import {Grid, Card, CardContent, Table, TableRow, TableCell, Button, Hidden, makeStyles, Box} from '@material-ui/core';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CountUp from 'react-countup';
import bg2 from './images/bg2.svg';
import bg from './images/circled-background.svg';
import about_bg from './images/about_bg.svg';
import journey from './images/journey_bg.svg';
import purple from './images/purpleCard.svg';
import orange from './images/orangeCard.svg';
import './css/AboutUs.css';
import Fade from 'react-reveal/Fade';
import about from './images/about.svg';

const AboutUs = () => {

  const useStyles = makeStyles((theme) => ({
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

  return(
    <Grid style={{overflowX:'hidden'}}>
      <Grid container justify="space-evenly" alignItems="center" style={{background:`url(${about_bg})`, backgroundSize:'cover', paddingBottom:'15%'}}>
        <Grid item lg={12} md={12} sm={12} xs={12} style={{background:'transparent', marginBottom:'10%'}}><Navbar style={{background:'transparent', marginBottom:'8%'}}/></Grid>
        <Grid item lg={7} md={7} sm={10} xs={10}style={{color:'#3f3d56', margin:'auto', width:'80%', textAlign:'center'}}>
          <Fade duration={1000} bottom>
            <p style={{fontSize:'7vh', fontWeight:'600'}}>Want to know more ?</p>
            <p style={{lineHeight:'1.6', fontSize:'3vh', color:'#4d4d4d'}}>
            Curiosity may have killed the cat but our story will make you smile.<br>
            </br> Keep scrolling to find out.</p>
          </Fade>
        </Grid>
        <Grid item lg={5} md={5} sm={10} xs={10} style={{margin:'auto', width:'auto'}}>
          <Fade duration={1000} bottom>
            <img src={about} alt="" height="400" style={{width: "80%", paddingLeft:'10%'}}/>
          </Fade>
        </Grid>
      </Grid>
      <Grid container justify="flex-start" alignItems="stretch" style={{marginTop:'5%', marginBottom:'0%', background:'transparent', paddingLeft:0}} spacing={0}>
        <Grid item lg={2} md={3} sm={2} xs={4} style={{background:`url(${journey})`, backgroundSize:'cover', width:'100%', height:600}}>
        </Grid>
        <Grid item lg={4} md={7} sm={8} xs={7} style={{marginTop:'5%', background:'transparent'}}>
          {/*<p style={{ background:`url(${journey})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', transform:'rotate(45deg)', borderRadius:'0em', width:800, height:800}}></p>*/}
          <Fade duration={1000} bottom>
            <img src={require('./images/people.svg')} alt="" height="400" style={{background:'white', border:'10px solid #e6e6e6', borderRadius:'20px', width : "100%"}}/>
          </Fade>
        </Grid>
        <Grid item lg={6} md={8} sm={8} xs={11} style={{margin:'auto', paddingLeft:'10%', paddingRight:'10%', width:'80%'}}>
          <Fade duration={1000} bottom>
            <p style={{color:'grey', textTransform:'uppercase', fontSize:'15px', fontWeight:'600'}}>About Us</p>
            <h1 style={{color:'#ff7a59', marginBottom:'10%'}}>Our journey</h1>
            <ul style={{textAlign:'justify', color:'#404040'}} className="ul">
              <li>It’s 1998 and Lila Dental Clinic is being established by a young couple with heads full of dreams and minds full of knowledge. The only weapons in their arsenal are welcoming smiles and honest work. </li>
              <li>Cut to the present, the humble clinic has grown into one of the premier and leading establishments in New Delhi and beyond. The couple has earned a few greys and the patients have grown in number but the welcoming smiles and the urge to deliver the best remains as strong as ever.</li>
            </ul>
          </Fade>
        </Grid>
      </Grid>
      <Grid container justify="center" alignItems="stretch">
        <Grid item lg={5} md={6} sm={8} xs={8} style={{textAlign:'center', marginBottom:'5%'}}>
          <Fade duration={1000} bottom>
            <h1 style={{color:'#ff7a59', textTransform:'uppercase', marginBottom:'2.5%'}}>Who We Are</h1>
            <p style={{ lineHeight:'1.8', color:'#404040', width:'100%', textAlign:'center', float:'right', fontSize:'18px'}}>Wanna know who’s treating you? Here’s a little something about us.</p>
          </Fade>
        </Grid>
        <Grid item container justify="center" alignItems="stretch" spacing={2} style={{marginBottom:0, paddingBottom:0}}>
          <Grid item lg={5} md={8} sm={6} xs={12}>
            <Fade duration={1000} bottom>
              <p style={{marginLeft:'11%', marginRight:'13%', marginTop:'0%', lineHeight:'1.8', textAlign:'justify', color:'#404040'}}>
                <h3 style={{color:'#645ba4', textAlign:'center', marginBottom:'-1%'}}>Dr C.S Baiju</h3>
                <br></br>
                Graduated in 1996 with an M.D.S degree, Dr Baiju is now one of the leading periodontists in Delhi. His thirst for knowledge is almost equal to his expertise in the ins and outs of dentistry. When not in his clinic, he can often be found chilling with his family or poring over a dental journal.
              </p>
            </Fade>
          </Grid>
          <Hidden smDown>
          <Grid item lg={5} md={6} sm={8} xs={12} style={{background:`url(${purple})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', marginLeft:'12%'}}>
            <Fade duration={1000} bottom>
              <img src={require('./images/CSBaiju.png')} alt="" height="253" style={{float:'left', marginTop:'-1%', marginLeft:'-1%', marginBottom:'-1%'}}/>
            </Fade>
          </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid item lg={5} md={5} sm={8} xs={12} style={{background:`url(${purple})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', marginLeft:'20%'}}>
              <Fade duration={1000} bottom>
                <img src={require('./images/CSBaiju.png')} alt="" height="253" style={{float:'left', marginTop:'-1%', marginLeft:'-1%', marginBottom:'-1%'}}/>
              </Fade>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
      <Grid container justify="center" alignItems="stretch" style={{marginTop:'5%'}}>
        <Hidden mdDown>
        <Grid item lg={5} md={6} sm={8} xs={10} style={{marginLeft:'0%'}}>
          <Fade duration={1000} bottom>
            <div item style={{width:'75%', height:'100%', background:`url(${orange})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', textAlign:'right', paddingRight:'35%'}}>
              <img src={require('./images/AnuradhaBaiju.png')} alt="" height="300vh" style={{marginTop:'-10%'}}/>
            </div>
          </Fade>
        </Grid>
        </Hidden>
        <Grid item lg={5} md={8} sm={10} xs={12} style={{marginTop:'0%'}}>
          <Fade duration={1000} bottom>
            <p style={{marginLeft:'11%', marginRight:'13%', marginTop:'0%', lineHeight:'1.8', textAlign:'justify', color:'#404040'}}>
              <h3 style={{color:'#ff8566', textAlign:'center', marginBottom:'-1%'}}>Dr Anuradha Baiju</h3>
              <br></br>
              Dr Anuradha graduated in 1994 with a B.D.S degree and is now known for her patient-centric yet highly professional brand of dentistry. Her optimism is contagious and compliments her vast repertoire of dental knowledge. When not in her clinic, she can be found bonding with her two sons or bingeing on her favourite shows.
            </p>
          </Fade>
        </Grid>
        <Hidden lgUp>
        <Grid item lg={5} md={6} sm={8} xs={10} style={{marginLeft:'0%'}}>
          <Fade duration={1000} bottom>
            <div item style={{width:'75%', height:'100%', background:`url(${orange})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', textAlign:'right', paddingRight:'35%'}}>
              <img src={require('./images/AnuradhaBaiju.png')} alt="" height="300vh" style={{marginTop:'-10%'}}/>
            </div>
          </Fade>
        </Grid>
        </Hidden>
      </Grid>
      <Grid container justify="center" alignItems="flex-start" style={{background:`url(${bg})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', padding:'5% 0%', marginTop:'8%'}}>
        <Card style={{width:'75%'}} classes={{root:classes.card, hover:classes.hover}}>
          <CardContent style={{padding:'3%', marginBottom:'0%'}}>
            <Grid justify="center" alignItems="stretch" container item lg={12} xs={12} style={{padding:'3% 1%'}}>
                <Grid item lg={5} md={8} sm={8} xs={12}>
                  <img src={require('./images/speaker.svg')} alt="" style={{float:'left', marginRight:'7.4%', marginTop:'-5%', marginBottom:'0%', width: '80%'}}/>
                </Grid>
                <Grid item lg={7} xs={12}>
                  <p style={{color:'#3f3d56', fontWeight:'600', fontSize:'3.5vh', marginTop:'3%', textAlign:'center'}}>Still not sure? Let us change your mind</p>
                  <Table style={{width:'100%'}}>
                    <TableRow>
                      <TableCell style={{border:'none', fontSize:'28px', color:'#3f51b5', width:'33%', padding:'4px 8px', textAlign:'center'}}><CountUp start={0} end={1000} duration={2} suffix="+" useEasing={false} redraw={true}></CountUp></TableCell>
                      <TableCell style={{border:'none', fontSize:'28px', color:'#3f51b5', width:'33%', textAlign:'center'}}>2</TableCell>
                      <TableCell style={{border:'none', fontSize:'28px', color:'#3f51b5', padding:'4px 8px', textAlign:'center'}}>20</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{border:'none', fontSize:'16px', padding:'4px 13px', color:'#808080', fontWeight:'500', textAlign:'center'}}>Satisfied customers</TableCell>
                      <TableCell style={{border:'none', fontSize:'16px', padding:'4px 10px', color:'#808080', fontWeight:'500', textAlign:'center'}}>Doctors</TableCell>
                      <TableCell style={{border:'none', fontSize:'16px', padding:'4px 10px', color:'#808080', fontWeight:'500', textAlign:'center'}}>Years of Experience</TableCell>
                    </TableRow>
                  </Table>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} style={{textAlign:'center'}}>
                  <Link to="/Book" style={{textDecoration:'none'}}><Button style={{color:'white', marginLeft:'0%',marginTop:'2%', marginBottom:'-1.5%',background:'#645ba4', padding:'2% 3%', width:'30%'}}>Book now</Button></Link>
                </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Footer/>
    </Grid>
  );
}

export default AboutUs;

/*
<div className="custom-shape-divider-top-1601571914">

</div>

*/

//<path fill="url(#grad2)" d="M56.5,-65.3C70.9,-55.3,78.6,-35.2,82.2,-14.6C85.7,6.1,85,27.4,75.7,43.7C66.3,60,48.2,71.3,28.8,77.8C9.4,84.3,-11.2,86,-27.1,78.5C-43,71,-54.2,54.3,-63.1,37.2C-71.9,20.1,-78.6,2.6,-77.6,-15.5C-76.6,-33.6,-68,-52.2,-53.8,-62.3C-39.6,-72.4,-19.8,-74,0.6,-74.7C21.1,-75.5,42.1,-75.4,56.5,-65.3Z" transform="translate(100 100)" />
