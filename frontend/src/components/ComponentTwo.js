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
          <Card variant="outlined" style={{marginTop:'10%', textAlign:'center', background:'grey'}}>
            <CardHeader title="Enter your Details" />
            <CardContent>
              <form className={classes.root} noValidate autoComplete="off" style={{marginLeft:'5%'}}>
                <Table>
                  <TableRow>
                    <MuiThemeProvider theme={theme}>
                      <TableCell style={{borderBottom:'none'}}><TextField id="name" label="Your name" variant="outlined" color="primary"/></TableCell>
                      <TableCell style={{borderBottom:'none'}}><TextField id="name" label="Your contact" variant="outlined" color="primary"/></TableCell>
                    </MuiThemeProvider>
                  </TableRow>
                  <TableRow>
                    <MuiThemeProvider theme={theme}>
                      <TableCell style={{borderBottom:'none'}}><TextField id="name" label="Your age" variant="outlined" color="primary" className={classes.cell}/></TableCell>
                      <TableCell style={{borderBottom:'none'}}><TextField id="name" label="Your gender" variant="outlined" color="primary"/></TableCell>
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
