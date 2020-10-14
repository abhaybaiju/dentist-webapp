import React, {useState} from 'react';
import {Table, TableRow, TableCell, Grid, TextField, InputLabel, Select, MenuItem, FormControl, FormLabel, FormControlLabel, RadioGroup, makeStyles, Radio} from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import EmailIcon from '@material-ui/icons/Email';
import { useStateValue } from './StateProvider.js';
import { createMuiTheme } from '@material-ui/core/styles';

import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';

import {Input, OutlinedInput, InputAdornment, IconButton} from '@material-ui/core';


const InputForm = () => {

  /*const theme = createMuiTheme({
    palette: {
  		primary: {
  			main: '#027e97',
  		}
  	},
    overrides: {
        MuiTextField: {
            root: {
                borderColor:'#ff7a59',
                '& fieldset': {
                  borderColor:'#ff7a59',
                },
                '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
                borderColor: '#ff7a59',
            },
        },
      }
    }
  });

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    field: {
      '&:hover': {
        borderColor: '#ff7a59'
      },
      '&$focus': {
        borderColor: '#ff7a59'
      },
      '&$notchedOutline': {
        borderColor:'#ff7a59!important',
      }
    },
    hover: {},
    notchedOutline: {},
    menu: {
      '&:hover': {
        backgroundColor: '#ff7a59',
        color:'white',
      },
      '&$focused': {
        backgroundColor: '#ff7a59',
        color:'white',
      }
    },
    focused: {},
    radio: {
      '&$checked': {
        color: '#ff7a59'
      }
    },
    checked: {}
  }));


  const classes = useStyles();*/
  const [{globalName, globalEmail, globalPhone, globalGender, globalAge}, dispatch] = useStateValue();

  const [name, setName] = useState(globalName);
  const [email, setEmail] = useState(globalEmail);
  const [phone, setPhone] = useState(globalPhone);
  const [gender, setGender] = useState(globalGender);
  const [age, setAge] = useState(globalAge);
  const [validname, setValidName] = useState("");
  const [validemail, setValidEmail] = useState("");
  const [validphone, setValidPhone] = useState("");

  let array = Array.from({length: 100}, (_, i) => i + 1)
  const lesser = "<1";
  const greater = ">100";


  const handleAgeChange = (val) => {
    setAge(val);
    if(name ==="" || email===""|| phone===""|| gender==="" || validname!=true || validemail!=true || validphone!=true){
      console.log("Fields are empty");
      console.log(name,email,phone,gender,"hello");
      return;
    }
    dispatch({
      type: 'SET_FORM',
      globalName: name,
      globalEmail: email,
      globalPhone: phone,
      globalGender: gender,
      globalAge: val,
    });
  }

  return(
    <Grid container justify="center" alignItems="center">
      <Grid item lg={12}>
        <h2 style={{color:'#2f2b4f', textAlign:'center'}}><AccountCircleIcon style={{marginRight:'2%', marginBottom:'-1.5%'}}/>Personal Details</h2>
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
      <Grid item lg={5}>
        <FormControl component="fieldset" style={{margin:'2% 0%'}}>
          <FormLabel component="legend" style={{color:'grey'}}>Gender</FormLabel>
          <RadioGroup row aria-label="gender" name="gender" value={gender?gender: globalGender} onChange={(e)=>setGender(e.target.value)}>
            <FormControlLabel value="Male" control={<Radio style={{color:'#3f3d56'}} />} label="Male" />
            <FormControlLabel value="Female" control={<Radio style={{color:'#3f3d56'}} />} label="Female" />
            <FormControlLabel value="Others" control={<Radio style={{color:'#3f3d56'}} />} label="Others" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item lg={5}>
        <FormControl component="fieldset" style={{margin:'2% 0%'}}>
          <FormLabel component="legend" style={{color:'grey'}}>Gender</FormLabel>
          <RadioGroup row aria-label="gender" name="gender" >
            <FormControlLabel value="Male" control={<Radio style={{color:'#3f3d56'}} />} label="Male" />
            <FormControlLabel value="Female" control={<Radio style={{color:'#3f3d56'}} />} label="Female" />
            <FormControlLabel value="Others" control={<Radio style={{color:'#3f3d56'}} />} label="Others" />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  )
}


/*const InputForm = () => {

  const theme = createMuiTheme({
    palette: {
  		primary: {
  			main: '#027e97',
  		}
  	},
    overrides: {
        MuiTextField: {
            root: {
                borderColor:'#ff7a59',
                '& fieldset': {
                  borderColor:'#ff7a59',
                },
                '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
                borderColor: '#ff7a59',
            },
        },
      }
    }
  });

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    field: {
      '&:hover': {
        borderColor: '#ff7a59'
      },
      '&$focus': {
        borderColor: '#ff7a59'
      },
      '&$notchedOutline': {
        borderColor:'#ff7a59!important',
      }
    },
    hover: {},
    notchedOutline: {},
    menu: {
      '&:hover': {
        backgroundColor: '#ff7a59',
        color:'white',
      },
      '&$focused': {
        backgroundColor: '#ff7a59',
        color:'white',
      }
    },
    focused: {},
    radio: {
      '&$checked': {
        color: '#ff7a59'
      }
    },
    checked: {}
  }));


  const classes = useStyles();
  const [{globalName, globalEmail, globalPhone, globalGender, globalAge}, dispatch] = useStateValue();

  const [name, setName] = useState(globalName);
  const [email, setEmail] = useState(globalEmail);
  const [phone, setPhone] = useState(globalPhone);
  const [gender, setGender] = useState(globalGender);
  const [age, setAge] = useState(globalAge);
  const [validname, setValidName] = useState("");
  const [validemail, setValidEmail] = useState("");
  const [validphone, setValidPhone] = useState("");

  let array = Array.from({length: 100}, (_, i) => i + 1)
  const lesser = "<1";
  const greater = ">100";


  const handleAgeChange = (val) => {
    setAge(val);
    if(name ==="" || email===""|| phone===""|| gender==="" || validname!=true || validemail!=true || validphone!=true){
      console.log("Fields are empty");
      console.log(name,email,phone,gender,"hello");
      return;
    }
    dispatch({
      type: 'SET_FORM',
      globalName: name,
      globalEmail: email,
      globalPhone: phone,
      globalGender: gender,
      globalAge: val,
    });
  }

  return(
    <Grid container justify="center" alignItems="center" >
      <Grid item lg={12} style={{marginLeft:'-5%', marginTop:'5.5%', marginBottom:'3.4%', width:'95%'}}>
          <Table>
            <TableRow>
              <TableCell style={{borderBottom:'none', background:'#f8faf9'}}>
                <h2 style={{color:'#027e97', textAlign:'center', marginTop:'-1%', marginBottom:'-1%'}}><ContactMailIcon style={{marginRight:'2%', marginBottom:'-1%'}}/>Enter your details</h2>
              </TableCell>
            </TableRow>
            <TableRow>
              <MuiThemeProvider theme={theme}>
                <TableCell style={{borderBottom:'none', width:'100%'}}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <AccountCircleIcon style={{color:'#ff7a59'}}/>
                    </Grid>
                    <Grid item lg={10} alignItems="center" justify="center">
                      <TextField required id="name" value={name?name: globalName} label="Your name" color="primary"  onChange={(e)=>{
                        setName(e.target.value);
                        e.target.value.match("^[a-zA-Z ]*$")===null? setValidName(false) : setValidName(true);
                        }}/>
                        <FontAwesomeIcon icon={validname===""? "": validname ? faCheck: faTimes} color={validname===""? "": validname ? "green": "red"} size="lg"/>
                    </Grid>
                  </Grid>
                </TableCell>
              </MuiThemeProvider>
            </TableRow>
            <TableRow>
              <MuiThemeProvider theme={theme}>
                <TableCell style={{borderBottom:'none', width:'100%'}}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <EmailIcon style={{color:'#ff7a59'}}/>
                    </Grid>
                    <Grid item lg={10}>
                      <TextField required type="email" id="email" inputProps={{ className: classes.input, pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" }} value={email?email: globalEmail} label="Your email id" color="primary"
                      onChange={(e)=>{
                        setEmail(e.target.value);
                        e.target.value.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")===null? setValidEmail(false) : setValidEmail(true);
                        }}/>
                        <FontAwesomeIcon icon={validemail===""? "": validemail ? faCheck: faTimes} color={validemail===""? "": validemail ? "green": "red"} size="lg"/>
                    </Grid>
                  </Grid>
                </TableCell>
              </MuiThemeProvider>
            </TableRow>
            <TableRow>
              <MuiThemeProvider theme={theme}>
                <TableCell style={{borderBottom:'none', width:'100%'}}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <PhoneEnabledIcon style={{color:'#ff7a59'}}/>
                    </Grid>
                    <Grid item lg={10}>
                      <TextField required id="phone" value={phone?phone: globalPhone} label="Your phone number"
                      classes={{root: classes.field, hover:classes.hover, notchedOutline: classes.notchedOutline}}
                      onChange={(e)=>{
                        setPhone(e.target.value);
                        e.target.value.match("^[0-9]{10}$")===null? setValidPhone(false) : setValidPhone(true);
                        }}/>
                        <FontAwesomeIcon icon={validphone===""? "": validphone ? faCheck: faTimes} color={validphone===""? "": validphone ? "green": "red"} size="lg"/>
                    </Grid>
                  </Grid>
                </TableCell>
              </MuiThemeProvider>
            </TableRow>

            <TableRow>
              <MuiThemeProvider theme={theme}>
                <TableCell style={{borderBottom:'none', width:'100%'}}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <FormLabel component="legend">Gender</FormLabel>
                      <RadioGroup aria-label="gender" name="gender" value={gender?gender: globalGender} onChange={(e)=>setGender(e.target.value)} row>
                        <FormControlLabel value="M" control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>} label="Male" />
                        <FormControlLabel value="F" control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>} label="Female" />
                        <FormControlLabel value="O" control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>} label="Others" />
                      </RadioGroup>
                    </Grid>
                    <Grid item>
                      <FormControl className={classes.formControl}>
                        <InputLabel id="ageLabel">Age</InputLabel>
                        <Select labelId="age" id="age" value={age?age: globalAge} onChange={(e)=>handleAgeChange(e.target.value)}>
                          <MenuItem value={lesser} classes={{root:classes.menu, hover: classes.hover,focus: classes.focus}}>{lesser}</MenuItem>
                          {array.map((key,value) => (
                            <MenuItem value={value+1} classes={{root:classes.menu, hover: classes.hover,focus: classes.focus}}>{value+1}</MenuItem>
                          ))}
                          <MenuItem value={greater} classes={{root:classes.menu, hover: classes.hover,focus: classes.focus}}>{greater}</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </TableCell>
              </MuiThemeProvider>
            </TableRow>
          </Table>
      </Grid>
    </Grid>
  );
}*/

export default InputForm;