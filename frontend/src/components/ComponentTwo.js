import React, {useState} from 'react';
import {Table, TableRow, TableCell, Card, CardHeader, CardContent, Grid, makeStyles, Button, TextField} from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { MuiThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles';

const ComponentTwo = () => {

  const theme = createMuiTheme({
    palette: {
  		primary: {
  			main: '#027e97',
  		}
  	},
    overrides: {
        MuiOutlinedInput: {
            root: {
                '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
                borderColor: '#ff7a59',
            },
        },
      }
    }
  });

  const useStyles = makeStyles((theme) => ({
  cell: {
    "&:hover": {
      borderColor:'#ff7a59'
    }
  },
}));

const Two = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  return(
    <Grid container justify="center" alignItems="stretch" >

        <Grid item lg={8}>
          <Card variant="outlined" style={{marginTop:'10%', textAlign:'center', borderRadius:'0px', border:'20px solid #e1e2e4', background:'linear-gradient(to top left, #436375 30%, #586e80 50%, #a9b7c0 50%)', backgroundRepeat:'no-repeat'}}>
            <CardContent>
              <form className={classes.root} noValidate autoComplete="off" style={{marginLeft:'5%', marginTop:'5.5%', marginBottom:'3.4%'}}>
                <Table>
                  <TableRow>
                    <MuiThemeProvider theme={theme}>
                      <TableCell style={{borderBottom:'none'}}><TextField id="name" label="Your name" variant="outlined" color="primary"/></TableCell>
                      <TableCell style={{borderBottom:'none'}}><TextField id="name" label="Your name" variant="outlined" color="primary"/></TableCell>
                    </MuiThemeProvider>
                  </TableRow>
                  <TableRow>
                    <MuiThemeProvider theme={theme}>
                      <TableCell style={{borderBottom:'none'}}><TextField id="name" label="Your name" variant="outlined" color="primary"/></TableCell>
                      <TableCell style={{borderBottom:'none'}}><TextField id="name" label="Your contact" variant="outlined" color="primary"/></TableCell>
                    </MuiThemeProvider>
                  </TableRow>
                  <TableRow>
                    <MuiThemeProvider theme={theme}>
                      <TableCell style={{borderBottom:'none'}}>
                        <TextField id="name" label="Your age" variant="outlined" color="primary" className={classes.cell}/>
                      </TableCell>
                      <TableCell style={{borderBottom:'none'}}>
                        <TextField id="name" label="Your gender" variant="outlined" color="primary"/>
                      </TableCell>
                    </MuiThemeProvider>
                  </TableRow>
                </Table>
              </form>
            </CardContent>
          </Card>
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

*/
