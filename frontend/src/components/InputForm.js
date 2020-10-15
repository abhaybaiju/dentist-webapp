import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Grid, TextField, InputLabel, Select, MenuItem, FormControl, FormLabel, RadioGroup, makeStyles, Radio, Input, OutlinedInput, InputAdornment, IconButton, FormControlLabel, Checkbox} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import EmailIcon from '@material-ui/icons/Email';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { useStateValue } from './StateProvider.js';
import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';

const InputForm = () => {

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
  const [{globalName, globalEmail, globalPhone, globalGender, globalAge, globalChecked}, dispatch] = useStateValue();

  const [name, setName] = useState(globalName);
  const [email, setEmail] = useState(globalEmail);
  const [phone, setPhone] = useState(globalPhone);
  const [gender, setGender] = useState(globalGender);
  const [age, setAge] = useState(globalAge);
  const [check, setCheck] = useState(false);
  const [validname, setValidName] = useState("");
  const [validemail, setValidEmail] = useState("");
  const [validphone, setValidPhone] = useState("");

  let array = Array.from({length: 100}, (_, i) => i + 1)
  const lesser = "<1";
  const greater = ">100";

  const handleCheckChange = () => {
    setCheck(true);
    if(name ==="" || email===""|| phone===""|| gender==="" || validname!=true || validemail!=true || validphone!=true){
      console.log("Fields are empty or incorrectly filled.");
      console.log(name,email,phone,gender,"hello");
      return;
    }
    dispatch({
      type: 'SET_FORM',
      globalName: name,
      globalEmail: email,
      globalPhone: phone,
      globalGender: gender,
      globalAge: age,
      globalChecked: true
    });
  }

  return(
    <Grid container justify="center" alignItems="center">
      <Grid item lg={12}>
        <h2 style={{color:'#2f2b4f', textAlign:'center', marginTop:'-1%'}}><PersonPinIcon style={{marginRight:'1.5%', marginBottom:'-0.8%', fontSize:'30px'}}/>Personal Details</h2>
      </Grid>
      <Grid item lg={10}>
        <FormControl variant="outlined" style={{width:'100%', margin:'2% 0%'}}>
          <InputLabel htmlFor="name">Full name</InputLabel>
          <OutlinedInput required id="name" type={'text'} value={name?name: globalName} placeholder="Your name" color="primary"
            onChange={(e)=>{
              setName(e.target.value);
              e.target.value.match("^[a-zA-Z ]*$")===null? setValidName(false) : setValidName(true);
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end" style={validname?{color:'green'}:{color:'red'}}>
                  {validname===""? "": validname ? <DoneIcon /> : <ClearIcon/>}
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
      <Grid item lg={10}>
        <FormControl variant="outlined" style={{width:'100%', margin:'2% 0%'}}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput required id="email" type={'text'} value={email?email: globalEmail} placeholder="Your email id" color="primary"
            onChange={(e)=>{
              setEmail(e.target.value);
              e.target.value.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")===null? setValidEmail(false) : setValidEmail(true);
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end" style={validemail?{color:'green'}:{color:'red'}}>
                  {validemail===""? "": validemail ? <DoneIcon /> : <ClearIcon/>}
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
      <Grid item lg={10}>
        <FormControl variant="outlined" style={{width:'100%', margin:'2% 0%'}}>
          <InputLabel htmlFor="phone">Contact</InputLabel>
          <OutlinedInput required id="phone" type={'text'} value={phone?phone: globalPhone} placeholder="Your phone number" color="primary"
            onChange={(e)=>{
              setPhone(e.target.value);
              e.target.value.match("^[0-9]{10}$")===null? setValidPhone(false) : setValidPhone(true);
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end" style={validphone?{color:'green'}:{color:'red'}}>
                  {validphone===""? "": validphone ? <DoneIcon /> : <ClearIcon/>}
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
      <Grid item lg={5} style={{textAlign:'center'}}>
        <FormControl component="fieldset" style={{margin:'2% 0%'}}>
          <FormLabel component="legend" style={{color:'grey', textAlign:'left'}}>Gender</FormLabel>
          <RadioGroup row aria-label="gender" name="gender" value={gender?gender: globalGender} onChange={(e)=>setGender(e.target.value)} style={{color:'#404040'}}>
            <FormControlLabel value="Male" control={<Radio classes={{root: classes.radio, checked: classes.checked, hover: classes.hover}} />} label="Male" />
            <FormControlLabel value="Female" control={<Radio classes={{root: classes.radio, checked: classes.checked, hover: classes.hover}} />} label="Female" />
            <FormControlLabel value="Others" control={<Radio classes={{root: classes.radio, checked: classes.checked, hover: classes.hover}} />} label="Others" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item lg={5} style={{textAlign:'center'}}>
        <FormControl variant="outlined" style={{margin:'2% 0%', width:'35%'}}>
          <InputLabel htmlFor="age">Age</InputLabel>
          <Select value={age?age: globalAge} onChange={(e)=>setAge(e.target.value)} label="Age" id="age" style={{textAlign:'left'}}>
            <MenuItem value={lesser} classes={{root:classes.menu, hover: classes.hover,focus: classes.focus}}>{lesser}</MenuItem>
            {array.map((key,value) => (
              <MenuItem value={value+1} classes={{root:classes.menu, hover: classes.hover,focus: classes.focus}}>{value+1}</MenuItem>
            ))}
            <MenuItem value={greater} classes={{root:classes.menu, hover: classes.hover,focus: classes.focus}}>{greater}</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item lg={10}>
        <FormControl component="fieldset" style={{marginTop:'2%', marginBottom:'-2%', marginLeft:'1%'}}>
          <FormControlLabel control={
            <Checkbox
              checked={check}
              onChange={handleCheckChange}
              name="checked"
              classes={{root:classes.check, hover: classes.hover,checked: classes.checked}}
            />
            }
            label={
              <div style={{color:'#666666', fontStyle:'italic'}}>
                <span>I understand and accept the </span>
                <Link to={'/terms'} style={{textDecoration:'none', color:'#2f2b4f', fontStyle:'italic'}}>Terms Of Use</Link>
                <span> and </span>
                <Link to={'/privacy'} style={{textDecoration:'none', color:'#2f2b4f', fontStyle:'italic'}}>Privacy Policy</Link>
                <span>of Lila Dental Clinic.</span>
              </div>
            }
          />
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default InputForm;
