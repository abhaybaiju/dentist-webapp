import React, {useState} from 'react';
import {Table, TableRow, TableCell, Grid, TextField, InputLabel, Select, MenuItem, FormControl, FormLabel, FormControlLabel, RadioGroup, makeStyles, Radio} from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import EmailIcon from '@material-ui/icons/Email';
import { useStateValue } from './StateProvider.js';
import { createMuiTheme } from '@material-ui/core/styles';
import img from './images/blue_wave.png';
import check from'./images/check.svg';
import error from'./images/error.svg';


const InputForm = () => {

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
    input: {
      padding: '2% 2%',
      "&:invalid": {
        
      },
      "&:focus:invalid": {
        background: `url(${error}) no-repeat 97% 50% #FFCCCC`,
      },
      "&:required:valid": {
        background: `url(${check}) no-repeat 97% 50% `,
      },
      "&:required:focus:valid": {
        background: `url(${check}) no-repeat 97% 50% `,
      }
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
  let array = Array.from({length: 100}, (_, i) => i + 1)
  const lesser = "<1";
  const greater = ">100";


  const handleAgeChange = (val) => {
    setAge(val);
    if(name ==="" || email===""|| phone===""|| gender===""){
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
                    <Grid item lg={10}>
                      <TextField required inputProps={{ className: classes.input, pattern: "[a-zA-Z ]{1,15}" }} id="name" value={name?name: globalName} label="Your name" color="primary" fullWidth={true} onChange={(e)=>setName(e.target.value)}/>
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
                      <TextField required type="email" id="email" inputProps={{ className: classes.input, pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" }} value={email?email: globalEmail} label="Your email id" color="primary" fullWidth={true} onChange={(e)=>setEmail(e.target.value)}/>
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
                      <TextField required id="phone" inputProps={{ className: classes.input, pattern: "^[0-9]{10}" }} value={phone?phone: globalPhone}label="Your phone number" fullWidth={true} onChange={(e)=>setPhone(e.target.value)} classes={{root: classes.field, hover:classes.hover, notchedOutline: classes.notchedOutline}}/>
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
}

export default InputForm;
