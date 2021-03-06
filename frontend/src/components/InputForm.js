import React from 'react';
import {Link} from 'react-router-dom';
import {Grid, InputLabel, Select, MenuItem, FormControl, FormLabel, RadioGroup, makeStyles, Radio,  OutlinedInput, InputAdornment, IconButton, FormControlLabel, Checkbox} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import EmailIcon from '@material-ui/icons/Email';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';
import Fade from 'react-reveal/Fade';
const InputForm = (props) => {

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    menu: {
      '&:hover': {
        backgroundColor: '#3f3d56',
        color:'white',
      },
      '&$focused': {
        backgroundColor: '#3f3d56',
        color:'white',
      }
    },
    check: {
      color:'#3f3d56',
      '&&:hover': {
        backgroundColor: 'rgba(63, 61, 86, 0.1)',
        color:'#3f3d56',
      },
      '&$checked': {
        color:'#3f3d56',
      }
    },
    radio: {
      color:'#3f3d56',
      '&&:hover': {
        backgroundColor:'rgba(63, 61, 86, 0.1)',
      },
      '&$checked': {
        color: '#3f3d56'
      }
    },
    checked:{},
    hover:{},
    focused: {}
  }));

  //<TextField id="description" label="Description" value={description?description:globalDescription} onChange={(e)=> {setDescription(e.target.value)}} placeholder="Why would you like to visit us?" variant="outlined" multiline rows={4} fullWidth={true} InputProps={{disableUnderline:true}} style={{backgroundColor:'white'}}/>


  const classes = useStyles();
  /*const [{globalName, globalEmail, globalPhone, globalGender, globalAge, globalChecked}, dispatch] = useStateValue();

  const [name, setName] = useState(globalName);
  const [email, setEmail] = useState(globalEmail);
  const [phone, setPhone] = useState(globalPhone);
  const [gender, setGender] = useState(globalGender);
  const [age, setAge] = useState(globalAge);
  const [check, setCheck] = useState(false);
  const [validname, setValidName] = useState("");
  const [validemail, setValidEmail] = useState("");
  const [validphone, setValidPhone] = useState("");*/

  let array = Array.from({length: 100}, (_, i) => i + 1)
  const lesser = "<1";
  const greater = ">100";

  return(
    <Fade bottom>
      <Grid container justify="center" alignItems="center">
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <h2 style={{color:'#2f2b4f', textAlign:'center', marginTop:'-1%'}}><PersonPinIcon style={{marginRight:'1.5%', marginBottom:'-0.8%', fontSize:'30px'}}/>Personal Details</h2>
        </Grid>
        <Grid item lg={10} md={10} sm={10} xs={10}>
          <FormControl variant="outlined" style={{width:'100%', margin:'2% 0%'}}>
            <InputLabel htmlFor="name">Full name</InputLabel>
            <OutlinedInput required id="name" type={'text'} value={props.name?props.name: props.globalName} placeholder="Your name" color="primary"
              onChange={(e)=>{
                props.onNameChange(e.target.value);
                e.target.value.match("^[a-zA-Z ]*$")===null? props.onValidNameChange(false) : props.onValidNameChange(true);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end" style={props.validname?{color:'green'}:{color:'red'}}>
                    {props.validname===""? "": props.validname ? <DoneIcon /> : <ClearIcon/>}
                  </IconButton>
                </InputAdornment>
              }
              startAdornment={
                <InputAdornment position="start">
                  <IconButton edge="start" style={{color:'#3f3d56'}}>
                    <AccountCircleIcon />
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
        </Grid>
        <Grid item lg={10} md={10} sm={10} xs={10}>
          <FormControl variant="outlined" style={{width:'100%', margin:'2% 0%'}}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <OutlinedInput required id="email" type={'text'} value={props.email?props.email: props.globalEmail} placeholder="Your email id" color="primary"
              onChange={(e)=>{
                props.onEmailChange(e.target.value);
                e.target.value.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")===null? props.onValidEmailChange(false) : props.onValidEmailChange(true);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end" style={props.validemail?{color:'green'}:{color:'red'}}>
                    {props.validemail===""? "": props.validemail ? <DoneIcon /> : <ClearIcon/>}
                  </IconButton>
                </InputAdornment>
              }
              startAdornment={
                <InputAdornment position="start">
                  <IconButton edge="start" style={{color:'#3f3d56'}}>
                    <EmailIcon />
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={40}
            />
          </FormControl>
        </Grid>
        <Grid item lg={10} md={10} sm={10} xs={10}>
          <FormControl variant="outlined" style={{width:'100%', margin:'2% 0%'}}>
            <InputLabel htmlFor="phone">Contact</InputLabel>
            <OutlinedInput required id="phone" type={'text'} value={props.phone?props.phone: props.globalPhone} placeholder="Your phone number" color="primary"
              onChange={(e)=>{
                props.onPhoneChange(e.target.value);
                e.target.value.match("^[0-9]{10}$")===null? props.onValidPhoneChange(false) : props.onValidPhoneChange(true);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end" style={props.validphone?{color:'green'}:{color:'red'}}>
                    {props.validphone===""? "": props.validphone ? <DoneIcon /> : <ClearIcon/>}
                  </IconButton>
                </InputAdornment>
              }
              startAdornment={
                <InputAdornment position="start">
                  <IconButton edge="start" style={{color:'#3f3d56'}}>
                    <PhoneEnabledIcon />
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={55}
            />
          </FormControl>
        </Grid>
        <Grid item lg={5} md={5} sm={5} xs={5} style={{textAlign:'center'}}>
          <FormControl component="fieldset" style={{margin:'2% 0%'}}>
            <FormLabel component="legend" style={{color:'grey', textAlign:'left'}}>Gender</FormLabel>
            <RadioGroup row aria-label="gender" name="gender" value={props.gender?props.gender: props.globalGender} onChange={(e)=>props.onGenderChange(e.target.value)} style={{color:'#404040'}}>
              <FormControlLabel value="M" control={<Radio classes={{root: classes.radio, checked: classes.checked, hover: classes.hover}} />} label="Male" />
              <FormControlLabel value="F" control={<Radio classes={{root: classes.radio, checked: classes.checked, hover: classes.hover}} />} label="Female" />
              <FormControlLabel value="O" control={<Radio classes={{root: classes.radio, checked: classes.checked, hover: classes.hover}} />} label="Others" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item lg={5} md={5} sm={5} xs={5} style={{textAlign:'center'}}>
          <FormControl variant="outlined" style={{margin:'2% 0%', width:'55%'}}>
            <InputLabel htmlFor="age">Age</InputLabel>
            <Select value={props.age?props.age: props.globalAge} onChange={(e)=>props.onAgeChange(e.target.value)} label="Age" id="age" style={{textAlign:'left'}}>
              <MenuItem value={lesser} classes={{root:classes.menu, hover: classes.hover,focus: classes.focus}}>{lesser}</MenuItem>
              {array.map((key,value) => (
                <MenuItem value={value+1} classes={{root:classes.menu, hover: classes.hover,focus: classes.focus}}>{value+1}</MenuItem>
              ))}
              <MenuItem value={greater} classes={{root:classes.menu, hover: classes.hover,focus: classes.focus}}>{greater}</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={10} md={10} sm={10} xs={10}>
          <FormControl component="fieldset" style={{marginTop:'2%', marginBottom:'-5%', marginLeft:'1%'}}>
            <FormControlLabel control={
              <Checkbox
                checked={props.check}
                onChange={() => props.onCheckChange(!props.check)}
                name="checked"
                classes={{root:classes.check, hover: classes.hover,checked: classes.checked}}
              />
              }
              label={
                <div style={{color:'#666666', fontStyle:'italic'}}>
                  <span>I understand and accept the </span>
                  <Link target="_blank" to={'/Terms'} style={{textDecoration:'none', color:'#2f2b4f', fontStyle:'italic'}}>Terms Of Use</Link>
                  <span>, </span>
                  <Link target="_blank" to={'/Privacy'} style={{textDecoration:'none', color:'#2f2b4f', fontStyle:'italic'}}>Privacy Policy</Link>
                  <span> and </span>
                  <Link target="_blank" to={'/Refunds'} style={{textDecoration:'none', color:'#2f2b4f', fontStyle:'italic'}}>Cancellation/Refund Policy</Link>
                  <span> of Lila Dental Clinic.</span>
                </div>
              }
            />
          </FormControl>
        </Grid>
      </Grid>
    </Fade>
  )
}

export default InputForm;
