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
        <Grid item lg={12} md={12} sm={12} xs={12} style={{background:'transparent'}}><Navbar style={{background:'transparent', marginBottom:'8%'}}/></Grid>
        <Grid item lg={6} md={5} sm={12} xs={12}style={{color:'#3f3d56', marginLeft:'3%', marginRight:'-2%', marginTop:'8%'}}>
          <Fade duration={1000} bottom>
            <p style={{fontSize:'7vh', fontWeight:'600'}}>Want to know more ?</p>
            <p style={{lineHeight:'1.6', fontSize:'3vh', color:'#4d4d4d'}}>
            Curiosity may have killed the cat but our story will make you smile.<br>
            </br> Keep scrolling to find out.</p>
          </Fade>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} style={{marginTop:'15%', marginLeft:'8%', marginRight:'-17%'}}>
          <Fade duration={1000} bottom>
            <img src={about} alt="" style={{width: "70%"}}/>
          </Fade>
        </Grid>
      </Grid>
      <Grid container justify="flex-start" alignItems="stretch" style={{marginTop:'5%', marginBottom:'0%', background:'transparent', paddingLeft:0}} spacing={0}>
        <Hidden mdDown>
        <Grid item lg={2} style={{background:`url(${journey})`, backgroundSize:'cover', width:'100%', height:600}}>
        </Grid>
        </Hidden>
        <Grid item lg={4} md={5} sm={8} xs={11} style={{marginTop:'5%', background:'transparent'}}>
          {/*<p style={{ background:`url(${journey})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', transform:'rotate(45deg)', borderRadius:'0em', width:800, height:800}}></p>*/}
          <Fade duration={1000} bottom>
            <img src={require('./images/people.svg')} alt="" style={{background:'white', border:'10px solid #e6e6e6', borderRadius:'20px', width : "100%"}}/>
          </Fade>
        </Grid>
        <Grid item lg={5} md={6} sm={10} xs={11} style={{marginTop:'1%', paddingLeft:'10%', paddingRight:'0%'}}>
          <Fade duration={1000} bottom>
            <p style={{color:'grey', textTransform:'uppercase', fontSize:'15px', fontWeight:'600'}}>About Us</p>
            <h1 style={{color:'#ff7a59', marginBottom:'10%'}}>Our journey</h1>
            <ul style={{textAlign:'justify', color:'#404040'}}>
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
            <p style={{ lineHeight:'1.8', color:'#404040', width:'100%', textAlign:'center', float:'right'}}>Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world.</p>
          </Fade>
        </Grid>
        <Grid spacing={1} item xs={12} container justify="center" alignItems="stretch">
          <Grid item lg={5} md={5} sm={6} xs={12}>
            <Fade duration={1000} bottom>
              <p style={{marginLeft:'16%', marginRight:'6%', marginTop:'5%', lineHeight:'1.7', textAlign:'justify', color:'#404040'}}>
                <h3 style={{color:'#645ba4', textAlign:'center', marginBottom:'-1%'}}>Dr C.S Baiju</h3>
                <br></br>
                Graduated in 1996 with an M.D.S degree, Dr Baiju is now one of the leading periodontists in Delhi. His thirst for knowledge is almost equal to his expertise in the ins and outs of dentistry. When not in his clinic, he can often be found chilling with his family or poring over a dental journal.
              </p>
            </Fade>
          </Grid>
          <Grid item lg={5} md={5} sm={6} xs={10}>
            <Fade duration={1000} bottom>
              <Card style={{width:'80%', marginLeft:'10%', borderRadius:'0px', boxShadow:'none', border:'none'}}>
                <CardContent style={{background:'#efeef6', marginTop:'3%'}}> {/*e0deed*/}
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" height="250" width="600" style={{marginTop:'-3%', marginBottom:'-6%', marginLeft:'-3.2%'}}>
                    <circle fill="#e0deed" cx="-170" cy="-200" r="400"/>
                  </svg>
                  <img src={require('./images/CSBaiju.png')} alt="" height="245" style={{float:'left', marginTop:'-51%', position:'sticky', marginLeft:'-3%'}}/>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        </Grid>
        <Grid spacing={1} item xs={12} container justify="center" alignItems="stretch">
          <Grid item lg={5} md={5} sm={6} xs={10} style={{marginTop:'4%'}}>
            <Fade duration={1000} bottom>
              <Card style={{width:'80%',borderRadius:'0px', boxShadow:'none', border:'none', marginLeft:'15%'}}>
                <CardContent style={{background:'#ffebe6', marginTop:'3%'}}>{/*ffd6cc*/}
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" height="250" width="600" style={{marginTop:'-3%', marginBottom:'-6%', marginLeft:'-3.2%'}}>
                    <circle fill="#ffd6cc" cx="250" cy="-200" r="400"/>
                  </svg>
                  <img src={require('./images/AnuradhaBaiju.png')} alt="" height="298" style={{float:'right', marginTop:'-62.5%', position:'sticky', marginRight:'-5%'}}/>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
          <Grid item lg={5} md={5} sm={6} xs={12} style={{marginTop:'2%'}}>
            <Fade duration={1000} bottom>
              <p style={{marginLeft:'12%', marginRight:'11%', marginTop:'8%', lineHeight:'1.8', textAlign:'justify', color:'#404040'}}>
                <h3 style={{color:'#ff8566', textAlign:'center', marginBottom:'-1%'}}>Dr Anuradha Baiju</h3>
                <br></br>
                Dr Anuradha graduated in 1994 with a B.D.S degree and is now known for her patient-centric yet highly professional brand of dentistry. Her optimism is contagious and compliments her vast repertoire of dental knowledge. When not in her clinic, she can be found bonding with her two sons or bingeing on her favourite shows.
              </p>
            </Fade>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" alignItems="center" style={{background:`url(${bg})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', padding:'5% 0%', marginTop:'8%'}}>
        <Card style={{width:'75%'}} classes={{root:classes.card, hover:classes.hover}}>
          <CardContent style={{padding:'5%', marginBottom:'0%'}}>
            <Grid justify="center" alignItems="center" container item lg={12} xs={12} style={{padding:'5% 2%'}}>
                <Grid lg={5} xs={12}>
                  <img src={require('./images/speaker.svg')} alt="" style={{float:'left', marginRight:'7.4%', marginTop:'-10%', marginBottom:'0%', width: '80%'}}/>
                </Grid>
                <Grid lg={7} xs={12}>
                  <p style={{color:'#3f3d56', fontWeight:'600', fontSize:'4.5vw', marginTop:'-1%'}}>Still not sure? Let us change your mind</p>
                </Grid>
                <Grid item lg={12} justify="center" alignItems="center">
                <Table >
                  <TableRow>
                    <TableCell style={{border:'none', fontSize:'28px', color:'#3f51b5', width:'25%', padding:'4px 8px'}}><CountUp start={0} end={1000} duration={2} suffix="+" useEasing={false} redraw={true}></CountUp></TableCell>
                    <TableCell style={{border:'none', fontSize:'28px', color:'#3f51b5', width:'22%', padding:'4px 8px'}}>2</TableCell>
                    <TableCell style={{border:'none', fontSize:'28px', color:'#3f51b5', padding:'4px 8px'}}>20</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{border:'none', fontSize:'16px', padding:'4px 13px', color:'#808080', fontWeight:'500'}}>Satisfied customers</TableCell>
                    <TableCell style={{border:'none', fontSize:'16px', padding:'4px 10px', color:'#808080', fontWeight:'500'}}>Doctors</TableCell>
                    <TableCell style={{border:'none', fontSize:'16px', padding:'4px 10px', color:'#808080', fontWeight:'500'}}>Years of Experience</TableCell>
                  </TableRow>
                </Table>
                </Grid>
                <Grid justify="center" alignItems="center">
                <Link to="/Book" style={{textDecoration:'none'}}><Button style={{color:'white', marginLeft:'50%',marginTop:'4%', marginBottom:'-5.5%',background:'#645ba4', padding:'0.5vw 3%', width:'15vw'}}>Book now</Button></Link>
                </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Footer top="5%" bottom="2%" left="12%" right="-25%"/>
    </Grid>
  );
}

export default AboutUs;

/*
<div className="custom-shape-divider-top-1601571914">

</div>

*/

//<path fill="url(#grad2)" d="M56.5,-65.3C70.9,-55.3,78.6,-35.2,82.2,-14.6C85.7,6.1,85,27.4,75.7,43.7C66.3,60,48.2,71.3,28.8,77.8C9.4,84.3,-11.2,86,-27.1,78.5C-43,71,-54.2,54.3,-63.1,37.2C-71.9,20.1,-78.6,2.6,-77.6,-15.5C-76.6,-33.6,-68,-52.2,-53.8,-62.3C-39.6,-72.4,-19.8,-74,0.6,-74.7C21.1,-75.5,42.1,-75.4,56.5,-65.3Z" transform="translate(100 100)" />
