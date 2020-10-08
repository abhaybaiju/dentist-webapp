import React from 'react';
import {Grid, Card, CardContent, Table, TableRow, TableCell, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
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
          <p style={{fontSize:'40px', fontWeight:'600'}}>Want to know more ?</p>
          <p style={{lineHeight:'1.6', fontSize:'20px'}}>
          Curiosity may have killed the cat but our story will make you smile.<br>
          </br> Keep scrolling to find out.</p>
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
          <h1 style={{color:'#ff7a59', marginBottom:'10%'}}>Our journey</h1>
          <ul style={{marginRight:'10%', textAlign:'justify'}}>
            <li>It’s 1998 and Lila Dental Clinic is being established by a young couple with heads full of dreams and minds full of knowledge. The only weapons in their arsenal are welcoming smiles and honest work. </li>
            <li>Cut to the present, the humble clinic has grown into one of the premier and leading establishments in New Delhi and beyond. The couple has earned a few greys and the patients have grown in number but the welcoming smiles and the urge to deliver the best in dentistry remains as strong as ever.</li>
          </ul>
        </Grid>
      </Grid>
      <Grid container justify="center" alignItems="stretch">
        <Grid item lg={12} style={{textAlign:'center', marginBottom:'5%'}}>
          <h1 style={{color:'#ff7a59', textTransform:'uppercase', marginBottom:'2.5%'}}>Who We Are</h1>
          <p style={{marginLeft:'30%', marginRight:'30%', lineHeight:'1.8'}}>Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world.</p>
        </Grid>
        <Grid spacing={1} item xs={12} container justify="center" alignItems="stretch">
          <Grid item xs={6} lg={5} >
            <p style={{marginLeft:'16%', marginRight:'6%', marginTop:'5%', lineHeight:'1.7', textAlign:'justify'}}>
              <h3 style={{color:'#645ba4', textAlign:'center', marginBottom:'-1%'}}>Dr C.S Baiju</h3>
              <br></br>
              Graduated in 1996 with an M.D.S degree, Dr Baiju is now one of the leading periodontists in Delhi. His thirst for knowledge is almost equal to his expertise in the ins and outs of dentistry. When not in his clinic, he can often be found chilling with his family or poring over a dental journal.
            </p>
          </Grid>
          <Grid item xs={6} lg={5}>
            <Card style={{width:'80%', marginLeft:'10%', borderRadius:'0px', boxShadow:'none', border:'none'}}>
              <CardContent style={{background:'#efeef6', marginTop:'3%'}}> {/*e0deed*/}
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" height="250" width="600" style={{marginTop:'-3%', marginBottom:'-6%', marginLeft:'-3.2%'}}>
                  <circle fill="#e0deed" cx="-170" cy="-200" r="400"/>
                </svg>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid spacing={1} item xs={12} container justify="center" alignItems="stretch">
          <Grid item xs={6} lg={5} style={{marginTop:'4%'}}>
            <Card style={{width:'80%',borderRadius:'0px', boxShadow:'none', border:'none', marginLeft:'15%'}}>
              <CardContent style={{background:'#ffebe6', marginTop:'3%'}}>{/*ffd6cc*/}
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" height="250" width="600" style={{marginTop:'-3%', marginBottom:'-6%', marginLeft:'-3.2%'}}>
                  <circle fill="#ffd6cc" cx="250" cy="-200" r="400"/>
                </svg>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} lg={5} style={{marginTop:'2%'}}>
            <p style={{marginLeft:'12%', marginRight:'11%', marginTop:'8%', lineHeight:'1.8', textAlign:'justify'}}>
              <h3 style={{color:'#ff8566', textAlign:'center', marginBottom:'-1%'}}>Dr Anuradha Baiju</h3>
              <br></br>
              Dr Anuradha graduated in 1994 with a B.D.S degree and is now known for her patient-centric yet highly professional brand of dentistry. Her optimism is contagious and compliments her vast repertoire of dental knowledge. When not in her clinic, she can be found bonding with her two sons or bingeing on her favourite shows.
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" alignItems="center" style={{background:'linear-gradient(to right, #8fcef0, #d2ebf9 20%, #e9f5fc 50%, #d2ebf9 80%, #8fcef0)', padding:'5% 0%', marginTop:'8%'}}>
        <Card style={{width:'75%', boxShadow:'none'}} className="card">
          <CardContent style={{padding:'5%', marginBottom:'0%'}}>
            <Grid item lg={12} style={{padding:'5% 2%'}}>
              <img src={require('./images/speaker.svg')} alt="" height="180" style={{float:'left', marginRight:'7.4%', marginTop:'-3%', marginBottom:'-8%'}}/>
              <p style={{color:'#3f3d56', fontWeight:'600', fontSize:'30px', marginTop:'-1%'}}>Still not sure? Let us change your mind</p>
              <Table style={{marginLeft:'32.5%'}}>
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
              <Link to="/Book" style={{textDecoration:'none'}}><Button style={{color:'white', marginLeft:'50%',marginTop:'4%', marginBottom:'-5.5%',background:'#645ba4', padding:'1.2% 3%'}}>Book now</Button></Link>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Footer top="5%" bottom="2%" left="12%" right="-25%"/>
    </Grid>
  );
}

export default AboutUs;

//<path fill="url(#grad2)" d="M56.5,-65.3C70.9,-55.3,78.6,-35.2,82.2,-14.6C85.7,6.1,85,27.4,75.7,43.7C66.3,60,48.2,71.3,28.8,77.8C9.4,84.3,-11.2,86,-27.1,78.5C-43,71,-54.2,54.3,-63.1,37.2C-71.9,20.1,-78.6,2.6,-77.6,-15.5C-76.6,-33.6,-68,-52.2,-53.8,-62.3C-39.6,-72.4,-19.8,-74,0.6,-74.7C21.1,-75.5,42.1,-75.4,56.5,-65.3Z" transform="translate(100 100)" />
