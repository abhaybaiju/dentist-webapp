import React from 'react';
import {Grid, Card, CardContent, Table, TableRow, TableCell} from '@material-ui/core';
import Navbar from './Navbar';
import Footer from './Footer';
import CountUp from 'react-countup';
import './css/AboutUs.css';

const AboutUs = () => {
  return(
    <Grid style={{overflowX:'hidden'}}>
      <div className="custom-shape-divider-top-1601571914">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="svg">
          <defs>
            <linearGradient id="grad1" x1="0" y1="0" x2="12.8" y2="0">
              <stop offset="5%" className="style1"/>
              <stop offset="10%" className="style2"/>
            </linearGradient>
          </defs>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="url(#grad1)"></path>
        </svg>
      </div>
      <Grid>
        <Navbar/>
      </Grid>
      <Grid container justify="space-evenly" alignItems="center" style={{marginTop:'8%', position:'sticky'}}>
        <Grid item lg={5} style={{color:'#3f3d56', marginLeft:'3%', marginRight:'-15%'}}>
          <h1>Are you getting the right treatment?</h1>
          <p style={{lineHeight:'1.6'}}>Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.</p>
        </Grid>
        <Grid item lg={6} style={{marginTop:'5%', marginLeft:'12%', marginRight:'-18%'}}>
          <img src={require('./images/about.svg')} alt="" height="400"/>
        </Grid>
      </Grid>
      <Grid container justify="space-evenly" alignItems="flex-start" style={{marginTop:'15%', marginBottom:'-62%'}} spacing={0}>
        <Grid item lg={2} style={{marginLeft:'-10%'}}>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" height="1620" width="1000">
            <defs>
              <linearGradient id="grad2" x1="0" y1="0" x2="11" y2="0">
                <stop offset="0%" className="style2"/>
                <stop offset="10%" className="style1"/>
              </linearGradient>
            </defs>
            <rect fill="url(#grad2)" width="90" height="90" rx="8" style={{transform:'rotate(-45deg)'}}/>
          </svg>
        </Grid>
        <Grid item lg={5} style={{marginTop:'10%'}}>
          <img src={require('./images/people.svg')} alt="" height="300" width="450" style={{background:'white', border:'10px solid #e6e6e6', borderRadius:'20px'}}/>
        </Grid>
        <Grid item lg={4} style={{marginTop:'1%'}}>
          <p style={{color:'grey', textTransform:'uppercase', fontSize:'15px', fontWeight:'600'}}>About Us</p>
          <h1 style={{color:'#ff7a59', marginBottom:'5%', marginTop:'-1%'}}>Our journey</h1>
          <ul style={{marginRight:'10%'}}>
            <li>Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.</li>
            <li>Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.</li>
            <li>Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.</li>
          </ul>
        </Grid>
      </Grid>
      <Grid container justify="center" alignItems="stretch">
        <Grid item lg={12} style={{textAlign:'center', marginBottom:'5%'}}>
          <h1 style={{color:'#ff7a59', textTransform:'uppercase', marginBottom:'2.5%'}}>Who We Are</h1>
          <p style={{marginLeft:'30%', marginRight:'30%', lineHeight:'1.5'}}>Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world.</p>
        </Grid>
        <Grid item lg={5} >
          <p style={{marginLeft:'10%', marginRight:'19%', marginTop:'12%', lineHeight:'1.5'}}>Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.</p>
        </Grid>
        <Grid item lg={5}>
          <Card style={{width:'80%', marginLeft:'20%', borderRadius:'0px', boxShadow:'none', border:'none'}}>
            <CardContent style={{background:'#efeef6', marginTop:'3%'}}> {/*e0deed*/}
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" height="250" width="600" style={{marginTop:'-3%', marginBottom:'-6%', marginLeft:'-3.2%'}}>
                <circle fill="#e0deed" cx="-170" cy="-200" r="400"/>
              </svg>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={5} style={{marginTop:'2%'}}>
          <Card style={{width:'80%',borderRadius:'0px', boxShadow:'none', border:'none'}}>
            <CardContent style={{background:'#ffebe6', marginTop:'3%'}}>{/*ffd6cc*/}
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" height="250" width="600" style={{marginTop:'-3%', marginBottom:'-6%', marginLeft:'-3.2%'}}>
                <circle fill="#ffd6cc" cx="250" cy="-200" r="400"/>
              </svg>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={5} style={{marginTop:'2%'}}>
          <p style={{marginLeft:'20%', marginRight:'10%', marginTop:'12%', lineHeight:'1.5'}}>Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.</p>
        </Grid>
      </Grid>
      <Grid container justify="center" alignItems="center" style={{background:'linear-gradient(to right, #a5d8f3, #d2ebf9, #a5d8f3)', padding:'5% 0%', marginTop:'8%'}}>
        <Card style={{width:'75%', boxShadow:'none'}} className="card">
          <CardContent style={{padding:'5%', marginBottom:'0%'}}>
            <Grid item lg={12} style={{padding:'5% 2%'}}>
              <img src={require('./images/speaker.svg')} alt="" height="160" style={{float:'left', marginRight:'7.4%', marginTop:'-5%', marginBottom:'-8%'}}/>
              <p style={{color:'#3f3d56', fontWeight:'600', fontSize:'30px', marginTop:'-3%'}}>Hiring? Candidates are working for you</p>
              <Table style={{marginLeft:'29.5%', marginBottom:'-5%'}}>
                <TableRow>
                  <TableCell style={{border:'none', fontSize:'28px', color:'#3f51b5', width:'25%', padding:'4px 8px'}}><CountUp start={0} end={1000} duration={4} suffix="+" useEasing={false} redraw={true}></CountUp></TableCell>
                  <TableCell style={{border:'none', fontSize:'28px', color:'#3f51b5', width:'22%', padding:'4px 8px'}}>2</TableCell>
                  <TableCell style={{border:'none', fontSize:'28px', color:'#3f51b5', padding:'4px 8px'}}>20</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{border:'none', fontSize:'16px', padding:'4px 13px'}}>Customers</TableCell>
                  <TableCell style={{border:'none', fontSize:'16px', padding:'4px 10px'}}>Doctors</TableCell>
                  <TableCell style={{border:'none', fontSize:'16px', padding:'4px 10px'}}>Years of Experience</TableCell>
                </TableRow>
              </Table>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Footer top="5%" bottom="2%" left="15%" right="-25%"/>
    </Grid>
  );
}

export default AboutUs;

//<path fill="url(#grad2)" d="M56.5,-65.3C70.9,-55.3,78.6,-35.2,82.2,-14.6C85.7,6.1,85,27.4,75.7,43.7C66.3,60,48.2,71.3,28.8,77.8C9.4,84.3,-11.2,86,-27.1,78.5C-43,71,-54.2,54.3,-63.1,37.2C-71.9,20.1,-78.6,2.6,-77.6,-15.5C-76.6,-33.6,-68,-52.2,-53.8,-62.3C-39.6,-72.4,-19.8,-74,0.6,-74.7C21.1,-75.5,42.1,-75.4,56.5,-65.3Z" transform="translate(100 100)" />
