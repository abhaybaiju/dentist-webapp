import React, {useState, useEffect} from 'react';
import {Button, Grid, Table, TableRow, TableCell, makeStyles, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, TextField} from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';
import axios from 'axios';
import { useStateValue } from './StateProvider.js';
import './css/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign, faLock } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';
const useStyles = makeStyles((theme) => ({
  button: {
    marginTop:'3%',
    marginBottom:'2%',
    padding:'1%',
    width:'100%',
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
  applybutton: {
    padding:'20%',
    width:'100%',
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
}));

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script);
  })

}

const sendPostRequest = async (postData) => {
  try{
      const resp = await axios.post("http://localhost:1337/book",postData);
      console.log(resp);
  } catch (err) {
      console.error(err);
  }
}

const __DEV__ = document.domain === 'localhost'

const Pay = () => {

  const [promo, setPromo] = useState("");
  const [validPromo, setValidPromo] = useState("");
  const [{globalName, globalEmail, globalPhone, globalGender, globalAge, globalTime, globalDate}, dispatch] = useStateValue();
  const [time, setTime] = useState("");
  //const date = globalDate;
  function parseTime(gtime) {
    var t=""
    try{
      switch (gtime) {
        case 1100:
          t = "11:00 AM";
          break;
        case 1115:
          t = "11:15 AM";
          break;
        case 1130:
          t = "11:30 AM";
          break;
        case 1145:
          t = "11:45 AM";
          break;
        case 1200:
          t = "12:00 PM";
          break;
        case 1215:
          t = "12:15 PM";
          break;
        case 1230:
          t = "12:30 PM";
          break;
        case 1245:
          t = "12:45 PM";
          break;
        case 1300:
          t = "01:00 PM";
          break;
        case 1830:
          t = "06:30 PM";
          break;
        case 1845:
          t = "06:45 PM";
          break;
        case 1900:
          t = "07:00 PM";
          break;
        case 1915:
          t = "07:15 PM";
          break;
        case 1930:
          t = "07:30 PM";
          break;
        case 1945:
          t = "07:45 PM";
          break;
        case 2000:
          t = "08:00 PM";
          break;
        case 2015:
          t = "08:15 PM";
          break;
        case 2030:
          t = "08:30 PM";
          break;
        default:
          t = "Please select another time slot!";
      }
    }
    catch(err){
      console.log(err);
    }
    return t;
  }

  useEffect(() => {
    setTime(parseTime(globalTime));
  },[])
  //;
  const date = [globalDate.slice(0, 3), ",", globalDate.slice(3)].join('');

  /**/

  async function displayRazorPay() {

    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    if(!res) {
      alert('Razorpay SDK failed to load. Are you online?')
      return
    }

    const data = await fetch('http://localhost:1337/pay', {method: 'POST' }).then((t) =>
      t.json()
    )

    if (!data) {
      alert("Server error. Are you online?");
      return;
    }

    console.log(data)

    const options = {
        "key": __DEV__ ? "rzp_test_KOxIh7UxMQOrbR" : "PRODUCTION_KEY", // Enter the Key ID generated from the Dashboard
        "amount": data.amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        //amount goes as a string value in razorpay, and refers to smallest possible unit of currency i.e. paise
        "currency": data.currency,
        "name": "Lila Dental Clinic",
        "description": "Appointment Booking",
        "image": "http://localhost:1337/logo.png",
        "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": (response) => {
          var redirect_url = "/";
          if (typeof response.razorpay_payment_id == 'undefined' ||  response.razorpay_payment_id < 1) {
            localStorage.setItem('payment',"failure");
            redirect_url = '/Book';
          } else {
            localStorage.setItem('payment',"success");
            localStorage.setItem("globalTime", globalTime);
            localStorage.setItem("globalDate",globalDate);
            const requestData = {
              "name": globalName,
              "contact": globalPhone,
              "gender": globalGender,
              "date": globalDate,
              "time": globalTime,
              "email": globalEmail
          }
            sendPostRequest(requestData);
            redirect_url = '/Success';
          }
          window.location = redirect_url;
        },
        "buttontext":"Pay with Razorpay",
        "prefill.contact":globalPhone,
        "prefill.email":globalEmail,
        "theme.color":"#027e97"
    };
    const paymentObject = window.Razorpay(options).open();
    paymentObject.open();
  }
  const classes = useStyles();

  return (
    <Fade bottom>
      <Grid container justify="center" alignItems="stretch" spacing={2}>
        <Grid item lg={10} md={10} sm={10} xs={10} style={{ marginTop:'0%', paddingTop:'0%', marginBottom:'0%'}}>
          <h2 style={{color:'#2f2b4f', textAlign:'center', paddingTop:'0%', marginTop:'0%'}}><VerifiedUserIcon style={{marginRight:'1.5%', marginBottom:'-0.8%', fontSize:'30px'}}/>You're almost there!</h2>
        </Grid>
        <Grid item lg={5} md={8} sm={8} xs={10} style={{borderRight:'0.5px solid #cccccc'}}>
          <Table>
            <TableRow>
              <TableCell style={{borderBottom:'none'}}><p style={{color:'#3f3d56', fontSize:'20px', textAlign:'left', marginTop:'0%', marginBottom:'0%', fontWeight:'500'}}>Billing Summary</p></TableCell>
            </TableRow>
          </Table>
          <Table>
            <TableRow>
              <TableCell><p style={{marginTop:'0%', marginBottom:'0%', fontSize:'15px'}}>Dental Consultation</p></TableCell>
              <TableCell><p style={{float:'right', marginTop:'0%', marginBottom:'0%', fontSize:'15px'}}><FontAwesomeIcon icon={faRupeeSign} style={{color:'#595959'}}/> 400.00</p></TableCell>
            </TableRow>
          </Table>
          <Table>
            <TableRow>
              <TableCell style={{borderBottom:'none', paddingBottom:'0%'}}><p style={{marginTop:'0%', marginBottom:'0%', paddingBottom:'0%', fontSize:'15px'}}>Have a Promo Code?</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{paddingTop:'0%'}}>
                <FormControl variant="outlined" style={{width:'100%', margin:'2% 0%'}}>
                  <TextField variant="outlined" label="Promo Code" error={validPromo===false} helperText={validPromo === "" ? "" : validPromo ? "Promo Code Applied" : "Invalid Promo Code"} id="promo" type={'text'} value={promo} placeholder="Your promo code" color="primary"
                    onChange={(e)=>{setPromo(e.target.value);}}
                    InputProps = {{
                      endAdornment:
                        <IconButton edge="end" style={validPromo?{color:'green'}:{color:'red'}}>
                          {validPromo===""? "": validPromo ? <DoneIcon /> : <ClearIcon/>}
                        </IconButton>,
                      classes: {
                        adornedEnd: classes.adornedEnd
                      }
                    }}
                  />
                </FormControl>
              </TableCell>
              <TableCell style={{paddingTop:'0%'}}><Button variant="outlined" onClick={()=>setValidPromo(false)} className={classes.applybutton}>Apply</Button></TableCell>
            </TableRow>
          </Table>
          <Table>
            <TableRow>
              <TableCell style={{borderBottom:'none'}}><h3 style={{marginTop:'0%', marginBottom:'0%', color:'#3f3d56'}}>Total</h3></TableCell>
              <TableCell style={{borderBottom:'none'}}><h3 style={{float:'right', marginTop:'0%', marginBottom:'0%', color:'#3f3d56'}}><FontAwesomeIcon icon={faRupeeSign} style={{color:'#3f3d56'}}/> 400.00</h3></TableCell>
            </TableRow>
          </Table>
        </Grid>
        <Grid item lg={5} md={8} sm={8} xs={10}>
          <Table style={{paddingLeft:'0%'}}>
            <TableRow>
              <TableCell style={{borderBottom:'none'}}><h3 style={{marginTop:'0%', marginBottom:'0%', paddingTop:'0%', paddingBottom:'0%', color:'#3f3d56'}}>{globalName}</h3></TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{borderBottom:'none', paddingTop:'0%'}}><p style={{marginTop:'0%', paddingTop:'0%'}}>{globalEmail}</p></TableCell>
              <TableCell style={{borderBottom:'none', paddingTop:'0%'}}><p style={{float:'right', marginTop:'0%', paddingTop:'0%'}}>{globalPhone}</p></TableCell>
            </TableRow>
          </Table>
          <div style={{border:' 2px solid #2f2b4f', borderRadius:'20px', width:'55%', borderTop:'50px solid #2f2b4f', margin:'auto'}}>
            <p style={{padding:'6%', textAlign:'center', fontSize:'20px', fontWeight:'400', color:'#3f3d56'}}>{date}<br/>{time}</p>
          </div>
        </Grid>
        <Grid item lg={10} md={10} sm={10} xs={10}>
          <Button className={classes.button} onClick={displayRazorPay}>Pay Now</Button>
          <p style={(validPromo===false)?{textAlign:'center', marginTop:'0%', paddingTop:'0%', fontSize:'12px',color:'#999999', textTransform:'uppercase', marginBottom:'-1.5%'}:{textAlign:'center', marginTop:'0%', paddingTop:'0%', fontSize:'12px',color:'#999999', textTransform:'uppercase'}}><FontAwesomeIcon icon={faLock} style={{color:'#999999'}}/>  Secure Checkout</p>
        </Grid>
      </Grid>
    </Fade>
  );
}

export default Pay;



/*

<TableRow>
  <TableCell><p style={{marginTop:'0%', marginBottom:'0%', fontSize:'15px'}}>CGST (9%)</p></TableCell>
  <TableCell><p style={{float:'right', marginTop:'0%', marginBottom:'0%', fontSize:'15px'}}><FontAwesomeIcon icon={faRupeeSign} style={{color:'#595959'}}/> 15.25</p></TableCell>
</TableRow>

<TableCell style={{borderBottom:'none', paddingBottom:'0%'}}><p style={{float:'right', marginTop:'0%', marginBottom:'0%', paddingBottom:'0%', fontSize:'15px'}}><FontAwesomeIcon icon={faRupeeSign} style={{color:'#595959'}}/> 169.50</p></TableCell>

<TableCell style={{borderBottom:'none', paddingBottom:'0%'}}><p style={{marginTop:'0%', marginBottom:'0%', fontSize:'15px'}}>Promo Code</p></TableCell>

<p style={{float:'right', marginTop:'0%', marginBottom:'0%', fontSize:'15px'}}><FontAwesomeIcon icon={faRupeeSign} style={{color:'#595959'}}/> 15.25</p>

<TableCell><p style={{marginTop:'0%', marginBottom:'0%', fontSize:'15px', borderBottom:'none'}}>Have a promo code?</p></TableCell>

<TableRow>
  <TableCell><p style={{marginTop:'0%', marginBottom:'0%', fontSize:'15px', borderBottom:'none'}}>Have a promo code?</p></TableCell>
</TableRow>
<TableRow>
  <TableCell style={{paddingBottom:'0%'}}>
    <FormControl variant="outlined" style={{width:'100%', margin:'2% 0%'}}>
      <InputLabel htmlFor="promo">Promo Code</InputLabel>
      <OutlinedInput required id="promo" type={'text'} value={promo} placeholder="Your promo code" color="primary"
        onChange={(e)=>{setPromo(e.target.value);}}
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end" style={validPromo?{color:'green'}:{color:'red'}}>
              {validPromo===""? "": validPromo ? <DoneIcon /> : <ClearIcon/>}
            </IconButton>
          </InputAdornment>
        }
        startAdornment={
          <InputAdornment position="start">
            <IconButton edge="start" style={{color:'#3f3d56'}}>
              <VerifiedUserIcon />
            </IconButton>
          </InputAdornment>
        }
        labelWidth={80}
      />
    </FormControl>
  </TableCell>
  <TableCell style={{paddingBottom:'0%'}}><Button variant="outlined" color="primary" onClick={()=>setValidPromo(false)}>Check</Button></TableCell>
</TableRow>

*/


/*

<Grid item lg={10}>
  <h2 style={{color:'#2f2b4f', textAlign:'center'}}>You're almost there!</h2>
</Grid>

<Grid item lg={7} style={{background: `url(${img})`, backgroundSize:'450px', backgroundRepeat:'no-repeat'}}>
  <img src={require('./images/verified.svg')} alt="" height="200" style={{marginTop:'20%', marginLeft:'30%'}}/>
</Grid>
<Grid item lg={5} style={{marginLeft:'0%', marginTop:'5.5%', marginBottom:'3.4%', width:'95%'}}>
  <Table>
    <TableRow>
      <TableCell style={{borderBottom:'none', background:'#f8faf9'}}>
        <h2 style={{color:'#027e97', textAlign:'center', marginTop:'-1%', marginBottom:'-1%'}}><VerifiedUserIcon style={{marginRight:'2%', marginBottom:'-1%'}}/>Verify your details</h2>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={{borderBottom:'none'}}>NAME :</TableCell>
      <TableCell style={{borderBottom:'none'}}>{globalName}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={{borderBottom:'none'}}>EMAIL :</TableCell>
      <TableCell style={{borderBottom:'none'}}>{globalEmail}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={{borderBottom:'none'}}>PHONE :</TableCell>
      <TableCell style={{borderBottom:'none'}}>{globalPhone}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={{borderBottom:'none'}}>GENDER :</TableCell>
      <TableCell style={{borderBottom:'none'}}>{globalGender}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={{borderBottom:'none'}}>AGE :</TableCell>
      <TableCell style={{borderBottom:'none'}}>{globalAge}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={{borderBottom:'none'}}>AMOUNT :</TableCell>
      <TableCell style={{borderBottom:'none'}}>INR 200</TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={{borderBottom:'none', textAlign:'center'}}><Button id="pay" onClick={displayRazorPay} className={classes.button}  >Confirm and Pay</Button></TableCell>
    </TableRow>
  </Table>
</Grid>

*/
