import React from 'react';
import {Container, Grid,Button, makeStyles, Fade, Fab} from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Navbar from './Navbar';
import img from './images/front.svg';
import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  button: {
    marginTop:'3%',
    marginBottom:'2%',
    padding:'2%',
    width:'50%',
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
  }
}));

const FrontPage = () => {

  const classes = useStyles();

  return(
    <Fade in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1500 } : {})}>
      <Grid spacing={2} direction="row" container alignItems="flex-start" justify="space-evenly" style={{overflowX:'hidden'}}>
        <Grid item lg={12} md={12} sm={12} xs={12} style={{marginBottom:'8%'}}>
          <Navbar />
        </Grid>
        <Grid item lg={5} md={5} sm={5} xs={10} style={{color:'#3f3d56', marginTop:'5%', textAlign:'center'}}>
          <h1 style={{lineHeight:'1.3'}}>Scared of dental treatments?</h1><br/>
          <p style={{lineHeight:'1.6', color:'#404040', width:'100%', textAlign:'center'}}>With our experienced staff and patient-friendly atmosphere, you’ll be nothing but smiles.</p>
          <Link to="/Book" style={{textDecoration:'none'}}><Button className={classes.button} variant="outlined">Book Now</Button></Link>
        </Grid>
        <Grid item lg={5} md={5} sm={5} xs={10} style={{marginTop:'0%', marginBottom:'10%'}}>
          <img alt="illustration" src={require('./images/doctors.svg')} height="400" width="100%"/>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} style={{background:`url(${img})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', top: 'auto',right:0,bottom:0,left:0,position: 'fixed', height:120}}>
        </Grid>
        <Fab target="_blank" href="https://api.whatsapp.com/send?phone=919810336864" style={{margin: 0,top: 'auto',right: 40,bottom: 40,left: 'auto',position: 'fixed', backgroundColor: "#ffffff", padding:'3.3%'}}>
          <img src={require("./images/whatsapp.png")} height="155"></img>
        </Fab>
      </Grid>
    </Fade>
  );
}

export default FrontPage;

/*
<div class="custom-shape-divider-bottom-1601099806">

</div>

*/
