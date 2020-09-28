import React, {useState} from 'react';
import {Table, TableRow, TableCell, Card, CardHeader, CardContent, Grid, Button, TextField, InputLabel, Select, MenuItem, FormControl, FormLabel, FormControlLabel, RadioGroup, makeStyles, Radio} from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { MuiThemeProvider } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { useStateValue } from './StateProvider.js';
import { createMuiTheme } from '@material-ui/core/styles';
import img from './images/blue_wave.png';

const ComponentTwo = () => {

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
    hover: {},
    focused: {},
    radio: {
      '&$checked': {
        color: '#ff7a59'
      }
    },
    checked: {}
  }));

const Two = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  let array = Array.from({length: 100}, (_, i) => i + 1)
  const lesser = "<1";
  const greater = ">100";

  const [{globalName, globalPhone, globalGender, globalAge}, dispatch] = useStateValue();

  const handleAgeChange = (val) => {
    setAge(val);
    dispatch({
      type: 'SET_FORM',
      globalName: name,
      globalPhone: phone,
      globalGender: gender,
      globalAge: val,
    });
  }

  return(
    <Grid container justify="center" alignItems="stretch" >
      <Grid item lg={6} style={{background: `url(${img})`, backgroundSize:'450px', backgroundRepeat:'no-repeat', marginLeft:'-5%'}}>
        <img src={require('./images/undraw_personalization_triu.svg')} alt="" height="200" style={{marginTop:'20%', marginLeft:'30%'}}/>
      </Grid>
      <Grid item lg={6} style={{marginLeft:'-5%', marginTop:'5.5%', marginBottom:'3.4%', width:'95%'}}>
        <form noValidate autoComplete="off" >
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
                      <TextField id="name" label="Your name" color="primary" fullWidth={true} onChange={(e)=>setName(e.target.value)}/>
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
                      <TextField id="name" label="Your phone number" fullWidth={true} onChange={(e)=>setPhone(e.target.value)} classes={{root: classes.field, hover:classes.hover, notchedOutline: classes.notchedOutline}}/>
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
                      <RadioGroup aria-label="gender" name="gender" value={gender} onChange={(e)=>setGender(e.target.value)} row>
                        <FormControlLabel value="Male" control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>} label="Male" />
                        <FormControlLabel value="Female" control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>} label="Female" />
                        <FormControlLabel value="Others" control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>} label="Others" />
                      </RadioGroup>
                    </Grid>
                    <Grid item>
                      <FormControl className={classes.formControl}>
                        <InputLabel id="ageLabel">Age</InputLabel>
                        <Select labelId="age" id="age" value={age} onChange={(e)=>handleAgeChange(e.target.value)}>
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
        </form>
      </Grid>
    </Grid>
  );
}

return(
  <Two />
);

}

export default ComponentTwo;


/*


*/
