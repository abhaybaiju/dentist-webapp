import React, {useState} from 'react';
import {Table, TableRow, TableCell, Card, CardHeader, CardContent, Grid, Button, TextField, InputLabel, Select, MenuItem, FormControl, FormLabel, FormControlLabel, RadioGroup, makeStyles, Radio} from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { MuiThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles';
import img from './images/blue_wave.png';

const ComponentTwo = () => {

  const theme = createMuiTheme({
    palette: {
  		primary: {
  			main: '#ced1d8',
  		}
  	},
    overrides: {
        MuiOutlinedInput: {
            root: {
                '& fieldset': {
                  borderColor:'#ced1d8',
                },
                '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
                borderColor: '#ced1d8',
            },
        },
      }
    }
  });

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    }
  }));

const Two = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  let array = Array.from({length: 100}, (_, i) => i + 1)
  const lesser = "<1";
  const greater = ">100";

  return(
    <Grid container justify="center" alignItems="stretch" >
      <Grid item lg={5} style={{background: `url(${img})`, backgroundSize:'450px', backgroundRepeat:'no-repeat'}}>
        <img src={require('./images/undraw_personalization_triu.svg')} alt="" height="200" style={{marginTop:'20%', marginLeft:'30%'}}/>
      </Grid>
      <Grid item lg={7}>
        <form noValidate autoComplete="off" style={{marginLeft:'5%', marginTop:'5.5%', marginBottom:'3.4%', overflow:'hidden'}}>
          <Table>
            <TableRow>
              <TableCell style={{borderBottom:'none'}}>
                <img src={require('./images/people.svg')} alt="" height="50" style={{float:'left'}}/>
                <h2 style={{color:'#027e97', marginLeft:'15%'}}>Enter your details</h2>
              </TableCell>
            </TableRow>
            <TableRow>
              <MuiThemeProvider theme={theme}>
                <TableCell style={{borderBottom:'none', width:'100%'}}><TextField id="name" label="Your name" variant="outlined" color="primary" fullWidth={true}/></TableCell>
              </MuiThemeProvider>
            </TableRow>
            <TableRow>
              <MuiThemeProvider theme={theme}>
                <TableCell style={{borderBottom:'none', width:'100%'}}><TextField id="name" label="Your phone number" variant="outlined" color="primary" fullWidth={true}/></TableCell>
              </MuiThemeProvider>
            </TableRow>

            <TableRow>
              <MuiThemeProvider theme={theme}>
                <TableCell style={{borderBottom:'none', width:'100%'}}>
                  <div style={{float:'left', width:'55%'}}>
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender" value={gender} onChange={(e)=>setGender(e.target.value)} row>
                      <FormControlLabel value="Male" control={<Radio />} label="Male" />
                      <FormControlLabel value="Female" control={<Radio />} label="Female" />
                      <FormControlLabel value="Others" control={<Radio />} label="Others" />
                    </RadioGroup>
                  </div>
                  <div style={{float:'right', width:'45%', marginRight:'-18%', marginTop:'-2%'}}>
                    <FormControl className={classes.formControl}>
                    <InputLabel id="ageLabel">Age</InputLabel>
                    <Select labelId="age" id="age" value={age} onChange={(e)=>setAge(e.target.value)}>
                      <MenuItem value={lesser}>{lesser}</MenuItem>
                      {array.map((key,value) => (
                        <MenuItem value={value+1}>{value+1}</MenuItem>
                      ))}
                      <MenuItem value={greater}>{greater}</MenuItem>
                    </Select>
                    </FormControl>
                  </div>
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

radial-gradient(100% 100% at 0% 50%, rgb(255,0,0) 49%, rgba(255,255,255) 50%)

<Grid item lg={3}>
  <Card variant="outlined" style={{marginTop:'11.8%', textAlign:'center', borderRadius:'0px', background:'#ff7a59', marginBottom:'-10%'}}>
    <CardContent style={{marginBottom:'33.5%', marginTop:'34%'}}>
      <p style={{color:'white', textAlign:'center', fontSize:'35px', marginTop:'10%', marginBottom:'10%'}}>Enter your details</p>
    </CardContent>
  </Card>
</Grid>






<Grid item lg={8}>
  <Card variant="outlined" style={{marginTop:'10%', textAlign:'center', borderRadius:'0px', border:'10px solid #e1e2e4' , background:'#f8faf9'}}>
    <CardContent>

    </CardContent>
  </Card>
</Grid>

*/
