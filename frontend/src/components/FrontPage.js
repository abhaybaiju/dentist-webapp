import React from 'react';
import {Container, Grid,Button, makeStyles, Fade} from '@material-ui/core';
import Navbar from './Navbar';
import img from './images/front.svg';
import {Link} from 'react-router-dom';
import './css/FrontPage.css';


const useStyles = makeStyles((theme) => ({
  button: {
    background: 'linear-gradient(to right, #027e97 0%, #63a6b7  51%, #027e97 100%)',
    color: 'white',
    transition: '0.5s',
    marginTop:'10%',
    boxShadow: '0 0 20px #eee',
    borderRadius: '10px',
    padding: '10px 60px',
    textAlign: 'center',
    textTransform: 'uppercase',
    backgroundSize: '200% auto',
    display: 'block',
    "&:hover": {
      backgroundPosition: 'right center', /* change the direction of the change here */
      color: '#fff',
      textDecoration:'none'
    }
  }
}));

const FrontPage = () => {

  const classes = useStyles();

  return(
    <Fade in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1500 } : {})}>
      <Grid spacing={2} direction="row" container alignItems="center" justify="center" style={{ minHeight: '100vh', overflow:'hidden'}}>
        <Grid item lg={12}>
          <Navbar />
        </Grid>
        <Grid item lg={5} style={{color:'#3f3d56', marginTop:'10%'}}>
          <h1 style={{lineHeight:'1.3'}}>Scared of dental treatments?</h1><br/>
          <p style={{lineHeight:'1.6', color:'#404040'}}>With our experienced staff and patient-friendly atmosphere, you’ll be nothing but smiles.</p>
          <Link to="/Book" style={{textDecoration:'none'}}><Button className={classes.button} variant="outlined">Book Now</Button></Link>
        </Grid>
        <Grid item lg={5} style={{marginTop:'10%'}}>
          <img alt="..." src={require('./images/doctors.svg')} height="400"/>
        </Grid>
        <Grid item lg={12} style={{background:`url(${img})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', height:120, marginTop:'3%'}}>
        </Grid>
      </Grid>
    </Fade>

  );
}

export default FrontPage;

/*
<div class="custom-shape-divider-bottom-1601099806">

</div>

*/
