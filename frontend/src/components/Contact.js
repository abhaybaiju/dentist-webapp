import React from 'react';
import Navbar from './Navbar';
import {Grid, Table, TableRow, TableCell, TextField, Button, makeStyles} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
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
      background: 'linear-gradient(to right, #027e97 0%, #63a6b7  51%, #027e97 100%)',
      color: 'white',
      transition: '0.5s',
      boxShadow: '0 0 20px #eee',
      borderRadius: '10px',
      padding: '10px 60px',
      width: '20vw',
      textAlign: 'center',
      textTransform: 'uppercase',
      backgroundSize: '200% auto',
      "&:hover": {
        backgroundPosition: 'right center', /* change the direction of the change here */
        color: '#fff',
        textDecoration:'none'
      }
    }
});

  const classes=useStyles();

  const handleSubmit = () => {
    const postData = {
      "name": name,
      "email": email,
      "message": message
  }
    try{
      const resp = axios.post("http://localhost:1337/query",postData);
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
        
        <Grid container alignItems="center" justify="space-evenly" style={{background:'linear-gradient(to right, #f2fcfe, #1c92d2)', marginTop:'0%'}}>
          <Navbar />
          <Grid item lg={5} style={{color:'#3f3d56'}}>
          <Fade duration={1000} bottom>
            <h1 style={{textAlign:'center', marginLeft:'5%', fontSize:'40px'}}>CONTACT US</h1>
            <p style={{marginLeft:'32%', lineHeight:'1.4', fontSize:'20px'}}>We are founded by a leading academic and researcher in the field of Industrial Systems Engineering.</p>
          </Fade>
          </Grid>
          <Grid item lg={7} style={{marginTop:'3%'}}>
            <img alt="..." src={require('./images/contact.svg')} height="400"/>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justify="space-evenly" spacing={5}>
        
          <Grid item lg={6} style={{color:'#3f3d56', marginTop:'3%'}}>
          <Fade duration={1000} bottom>
            <h3 style={{marginLeft:'27%',fontSize:'30px'}}>Contact details</h3>
            <p style={{marginLeft:'27%', lineHeight:'1.6', marginRight:'2%', fontSize:'16px', marginTop:'1%'}}>Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.</p>
            <Table style={{marginLeft:'25%', marginBottom:'-7%'}}>
              <TableRow>
                <TableCell style={{borderBottom:'none', fontSize:'30px', width:'10px'}}><p style={{border:'1px solid #c86d6e', borderRadius:'15px', paddingLeft:'3px', paddingRight:'3px', height:'40px'}}><PhoneIcon style={{color:'white', background:'#bf6f72', padding:'5px', borderRadius:'12px', marginTop:'8%'}}/></p></TableCell>
                <TableCell style={{borderBottom:'none'}}><TextField id="phone" label="Phone" defaultValue="+91 9810336864" InputProps={{readOnly: true, disableUnderline:true, classes:{input:classes.resize}}} InputLabelProps={{classes:{root:classes.label, focused: classes.focusedLabel, error: classes.erroredLabel}}}/></TableCell>
              </TableRow>
            </Table>
            <Table style={{marginLeft:'25%', marginBottom:'-7%'}}>
              <TableRow>
                <TableCell style={{borderBottom:'none', width:'10px', fontSize:'30px'}}><p style={{border:'1px solid #c86d6e', borderRadius:'15px', paddingLeft:'3px', paddingRight:'3px', height:'40px'}}><EmailIcon style={{color:'white', background:'#bf6f72', padding:'5px', borderRadius:'12px', marginTop:'10%'}}/></p></TableCell>
                <TableCell style={{borderBottom:'none'}}><TextField id="phone" label="Email" defaultValue="drcsbaiju@yahoo.co.in" InputProps={{readOnly: true, disableUnderline:true, classes:{input:classes.resize}}} InputLabelProps={{classes:{root:classes.label, focused: classes.focusedLabel, error: classes.erroredLabel}}}/></TableCell>
              </TableRow>
            </Table>
            <Table style={{marginLeft:'25%', marginBottom:'8%'}}>
              <TableRow>
                <TableCell style={{borderBottom:'none', width:'10px', fontSize:'30px'}}><p style={{border:'1px solid #c86d6e', borderRadius:'15px', paddingLeft:'3px', paddingRight:'3px', height:'40px'}}><LocationOnIcon style={{color:'white', background:'#bf6f72', padding:'5px', borderRadius:'12px', marginTop:'8%'}}/></p></TableCell>
                <TableCell style={{borderBottom:'none'}}><TextField id="phone" label="Address" defaultValue="DG-II, 57-A, Vikaspuri, New Delhi-110018" fullWidth={true} InputProps={{readOnly: true, disableUnderline:true, classes:{input:classes.resize}}} InputLabelProps={{classes:{root:classes.label, focused: classes.focusedLabel, error: classes.erroredLabel}}}/></TableCell>
              </TableRow>
            </Table>
            </Fade>
          </Grid>
          
          <Grid item lg={6} md={8} sm={12} xs = {12} >
            <MapView />
          </Grid>
        </Grid>
        <Grid container alignItems="center" justify="center" style={{background:'#f7f9fa'}}>
          <Grid item lg={9} style={{color:'#2f2b4f', textAlign:'center', marginTop:'4%'}}>
          <Fade duration={1000} bottom>
            <p style={{fontSize:'35px', fontWeight:'600'}}> Can't find the answer you need? </p>
            <p style={{lineHeight:'1.5'}}>Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.</p>
          </Fade>
          </Grid>
          <Grid item lg={5} style={{color:'#3f3d56', textAlign:'left'}}>
          <Fade duration={1000} bottom>
            <h4>Fullname</h4>
            <TextField id="fullname" value={name} onChange={(e)=> {setName(e.target.value)}} placeholder="Your full name" variant="outlined" fullWidth={true} InputProps={{disableUnderline:true, classes:{input:classes.backColor}}}/>
            <h4>E-mail</h4>
            <TextField id="fullname" value={email} onChange={(e)=> {setEmail(e.target.value)}} placeholder="Your e-mail address" variant="outlined" fullWidth={true} InputProps={{disableUnderline:true, classes:{input:classes.backColor}}}/>
            <h4>Message</h4>
            <TextField id="fullname" value={message} onChange={(e)=> {setMessage(e.target.value)}} placeholder="Your question about our services" variant="outlined" multiline rows={4} fullWidth={true} InputProps={{disableUnderline:true}} style={{backgroundColor:'white'}}/>
          </Fade>
          </Grid>
          <Grid item lg={10} style={{textAlign:'center', marginTop:'2%', marginBottom:'4%'}}>
          <Fade duration={1000} bottom>
            <Button className={classes.buttonSubmit} onClick={handleSubmit}>Submit</Button>
          </Fade>
          </Grid>
        </Grid>
        <Footer top="2%" bottom="2%" left="12%" right="-22%"/>
      </Grid>
  );
}

export default Contact;
