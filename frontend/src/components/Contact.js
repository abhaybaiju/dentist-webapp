import React from 'react';
import Navbar from './Navbar';
import {Grid, Table, TableRow, TableCell, TextField, Button, makeStyles, Fab} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
//import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MapView from './Map';
import Footer from './Footer';
import axios from 'axios';
import Fade from 'react-reveal/Fade';

const Contact = () => {
  const [name,setName] = React.useState("");
  const [email,setEmail] = React.useState("");
  const [message,setMessage] = React.useState("");

  const useStyles = makeStyles({
    label: {
      fontSize:'21px',
      "&$focusedLabel": {
        color: "grey"
      },
      "&$erroredLabel": {
        color: "grey"
      }
    },
    focusedLabel: {},
    erroredLabel: {},
    resize: {
      fontSize: '16px',
      color:'#404040'
    },
    backColor: {
      backgroundColor:'white'
    },
    buttonSubmit: {
      marginTop:'5%',
      marginLeft:'0%',
      padding:'1.5%',
      width:'20vw',
      minWidth:'150px',
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
});

  const classes=useStyles();

  const handleSubmit = () => {
    if(name==="" || email==="" || message===""){
      alert("Please fill all the required fields");
      return;
    }
    const postData = {
      "name": name,
      "email": email,
      "message": message
  }
    try{
      const resp = axios.post("api/query",postData);
      console.log(resp);
      setName("");
      setEmail("")
      setMessage("");
  } catch (err) {
      console.error(err);
  }
  }

  return(
      <Grid style={{overflowX:'hidden', overflow: "hidden"}}>
        <Grid container alignItems="center" justify="space-evenly" style={{background:'linear-gradient(to right, #f2fcfe, #1c92d2)', paddingBottom:'5%'}}>
          <Grid item lg={12} md={12} sm={12} xs={12} style={{marginBottom:'8%'}}><Navbar /></Grid>
          <Grid item lg={5} md={5} sm={12} xs={12} style={{color:'#3f3d56', marginTop:'5%'}}>
            <Fade duration={1000} bottom>
              <h1 style={{textAlign:'left', marginLeft:'15%', fontSize:'40px'}}>Contact Us</h1>
              <p style={{marginLeft:'15%',marginRight:'5%', lineHeight:'1.4', fontSize:'20px'}}>Looking for an answer? We would be happy to help. Reach out to us below.</p>
            </Fade>
          </Grid>
          <Grid item lg={7} md={6} sm={12} xs={12} style={{marginTop:'3%'}}>
            <img alt="illustration" src={require('./images/contact.svg')} style={{width: "90%", marginLeft:"10%"}}/>
          </Grid>
        </Grid>
        <Grid container alignItems="flex-start" justify="space-evenly" spacing={0}>
          <Grid item lg={6} md={8} sm={10} xs={10} style={{color:'#3f3d56', paddingTop:'3%', paddingLeft:'3%'}}>
            <Fade duration={1000} bottom>
              <h3 style={{marginLeft:'7%',fontSize:'35px'}}>Contact details</h3>
              <p style={{marginLeft:'7%', lineHeight:'1.6', marginRight:'2%', fontSize:'16px', marginTop:'1%'}}>Wanna talk to us? We’ll be happy to help. Contact us via phone, email or just drop in for a visit.</p>
              <Table style={{marginLeft:'5%', marginBottom:'-8%'}}>
                <TableRow>
                  <TableCell style={{borderBottom:'none', fontSize:'30px', width:'10px'}}><p style={{border:'1px solid #c86d6e', borderRadius:'15px', paddingLeft:'3px', paddingRight:'3px', height:'40px'}}><PhoneIcon style={{color:'white', background:'#bf6f72', padding:'5px', borderRadius:'12px', marginTop:'8%'}}/></p></TableCell>
                  <TableCell style={{borderBottom:'none'}}><TextField id="phone" label="Phone" defaultValue="011-28533236" InputProps={{readOnly: true, disableUnderline:true, classes:{input:classes.resize}}} InputLabelProps={{classes:{root:classes.label, focused: classes.focusedLabel, error: classes.erroredLabel}}}/></TableCell>
                </TableRow>
              </Table>
              <Table style={{marginLeft:'5%', marginBottom:'-8%'}}>
                <TableRow>
                  <TableCell style={{borderBottom:'none', width:'10px', fontSize:'30px'}}><p style={{border:'1px solid #c86d6e', borderRadius:'15px', paddingLeft:'3px', paddingRight:'3px', height:'40px'}}><EmailIcon style={{color:'white', background:'#bf6f72', padding:'5px', borderRadius:'12px', marginTop:'10%'}}/></p></TableCell>
                  <TableCell style={{borderBottom:'none'}}><TextField id="email" label="Email" defaultValue="drcsbaiju@yahoo.co.in" InputProps={{readOnly: true, disableUnderline:true, classes:{input:classes.resize}}} InputLabelProps={{classes:{root:classes.label, focused: classes.focusedLabel, error: classes.erroredLabel}}}/></TableCell>
                </TableRow>
              </Table>
              <Table style={{marginLeft:'5%', marginBottom:'8%'}}>
                <TableRow>
                  <TableCell style={{borderBottom:'none', width:'10px', fontSize:'30px'}}><p style={{border:'1px solid #c86d6e', borderRadius:'15px', paddingLeft:'3px', paddingRight:'3px', height:'40px'}}><LocationOnIcon style={{color:'white', background:'#bf6f72', padding:'5px', borderRadius:'12px', marginTop:'8%'}}/></p></TableCell>
                  <TableCell style={{borderBottom:'none'}}><TextField id="address" label="Address" defaultValue="DG-II, 57-A, Vikaspuri, New Delhi-110018" fullWidth={true} InputProps={{readOnly: true, disableUnderline:true, classes:{input:classes.resize}}} InputLabelProps={{classes:{root:classes.label, focused: classes.focusedLabel, error: classes.erroredLabel}}}/></TableCell>
                </TableRow>
              </Table>
            </Fade>
          </Grid>
          <Grid item lg={6} md={8} sm={12} xs = {12} >
            <MapView style={{height:'100%'}}/>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justify="center" style={{background:'#f7f9fa'}}>
          <Grid item lg={9} md={9} sm={9} xs={11} style={{color:'#2f2b4f', textAlign:'center', marginTop:'4%'}}>
          <Fade duration={1000} bottom>
            <p style={{fontSize:'35px', fontWeight:'600'}}> Can't find the answer you need? </p>
            <p style={{lineHeight:'1.5'}}>Send us a message and we’ll get back to you in a jiffy.</p>
          </Fade>
          </Grid>
          <Grid item lg={5} md={7} sm={9} xs={9} style={{color:'#3f3d56', textAlign:'left'}}>
          <Fade duration={1000} bottom>
            <h4>Name</h4>
            <TextField id="fullname" value={name} required onChange={(e)=> {setName(e.target.value)}} placeholder="Your full name" variant="outlined" fullWidth={true} InputProps={{disableUnderline:true, classes:{input:classes.backColor}}}/>
            <h4>E-mail</h4>
            <TextField id="email" value={email} required onChange={(e)=> {setEmail(e.target.value)}} placeholder="Your e-mail address" variant="outlined" fullWidth={true} InputProps={{disableUnderline:true, classes:{input:classes.backColor}}}/>
            <h4>Message</h4>
            <TextField id="message" value={message} required onChange={(e)=> {setMessage(e.target.value)}} placeholder="Your question about our services" variant="outlined" multiline rows={4} fullWidth={true} InputProps={{disableUnderline:true}} style={{backgroundColor:'white'}}/>
          </Fade>
          </Grid>
          <Grid item lg={10} md={10} sm={10} xs={11} style={{textAlign:'center', marginTop:'2%', marginBottom:'4%'}}>
          <Fade duration={1000} bottom>
            <Button className={classes.buttonSubmit} onClick={handleSubmit}>Submit</Button>
          </Fade>
          </Grid>
          <Fab href="https://api.whatsapp.com/send?phone=919810336864" style={{margin: 0,top: 'auto',right: 40,bottom: 40,left: 'auto',position: 'fixed', backgroundColor: "#ffffff"}}>
            <img src={require("./images/whatsapp.png")} height="155" alt=""></img>
          </Fab>
        </Grid>
        <Footer/>
      </Grid>
  );
}

export default Contact;
