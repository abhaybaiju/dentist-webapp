import React from 'react';
import {Table, TableRow, TableCell, Card, CardHeader, CardContent, Grid, makeStyles, Button, IconButton} from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import DateFnsUtils from '@date-io/date-fns';
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { MuiThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles';
import { useStateValue } from './StateProvider.js';

const ComponentOne = () => {

  const theme = createMuiTheme({
    palette: {
  		primary: {
  			main: '#ff7a59',
  		}
  	}
  });

  const useStyles = makeStyles((theme) => ({
  tablebutton: {
    width:'2vh',
    backgroundColor: 'white',
    color:'#027e97',
    boxShadow:'none',
    borderRadius:'50px',
    "&:hover": {
      backgroundColor: "#ff7a59",
      color:'white',
      borderRadius:'50px'
    },
    "&:focus": {
      backgroundColor: "#ff7a59",
      color:'white',
      borderRadius:'50px'
    }
  },
  input: {
    color: "#ff7a59"
  },
}));


  const classes = useStyles();
  const [am, setAM] = React.useState(true);
  const [date, changeDate] = React.useState(new Date().toDateString());
  const sup="AM";
  const pm="PM";
  const morning = [['11:00', '11:15', '11:30'], ['11:45', '12:00', '12:15'], ['12:30', '12:45', '01:00']]
  const evening = [['06:30', '06:45', '07:00'], ['07:15', '07:30', '07:45'], ['08:00', '08:15', '08:30']]
  const [time, setTime] = React.useState(2400);
  const [timeText, setTimeText] = React.useState('null');
  const [{globalTime, globalTimeText}, dispatch] = useStateValue();

  const handleTimeChange = (timeval, text) => {
		setTime(timeval);
    console.log(text);
		dispatch({
			type: 'SET_GLOBALTIME',
			globalTime: timeval,
      globalTimeText: text
		});

  }


  return(
    <Grid style={{marginRight:'8%', marginLeft:'8%'}}>
      <Grid container justify="space-evenly" alignItems="stretch" spacing={1}>
        <Grid item lg={5}>
  <h3 style={{color:'#027e97'}}><CalendarTodayIcon style={{marginRight:'2%', marginBottom:'-1.5%'}}/>Select date</h3>
          <Card variant="outlined">
            <CardContent style={{ marginTop:'5%'}}>
            <MuiThemeProvider theme={theme}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker disableToolbar disablePast autoOk variant="static" openTo="date" value={date} onChange={changeDate} InputProps={{ className: classes.input }}/>
              </MuiPickersUtilsProvider>
            </MuiThemeProvider>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={5}>
          <h3 style={{color:'#027e97'}}><AccessTimeIcon style={{marginRight:'2%', marginBottom:'-1.5%'}}/>{time===2400?"Select Date":"Selected date is " + globalTimeText }</h3>
          <Card variant="outlined">
            <CardHeader title={(am)?"Morning":"Evening"} action={
                <IconButton aria-label="Next" onClick={() => setAM(!am)} disabled={(am)?false:true} style={{marginTop:'16%'}}>
                  <ArrowForwardIosIcon />
                </IconButton>} avatar={
                <IconButton aria-label="Next" onClick={() => setAM(!am)} disabled={(am)?true:false} style={{marginLeft:'55%'}}>
                  <ArrowBackIosIcon />
                </IconButton>} style={{ marginTop:'8%',  textAlign:'center', marginLeft:'-10%'}}/>
            <CardContent>

                {am ?
					<Table style={{marginBottom:'4%'}}>
						<TableRow key={0}>
								<TableCell key={0} style={{borderBottom:'none'}}><Button variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1100, e.currentTarget.value)}>11:00<sup>am</sup></Button></TableCell>
								<TableCell key={1} style={{borderBottom:'none'}}><Button variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1115, e.currentTarget.value)}>11:15<sup>am</sup></Button></TableCell>
								<TableCell key={2} style={{borderBottom:'none'}}><Button variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1130, e.currentTarget.value)}>11:30<sup>am</sup></Button></TableCell>
            </TableRow>
						<TableRow key={1}>

								<TableCell key={0} style={{borderBottom:'none'}}><Button variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1145, e.currentTarget.value)}>11:45<sup>am</sup></Button></TableCell>
								<TableCell key={1} style={{borderBottom:'none'}}><Button variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1200, e.currentTarget.value)}>12:00<sup>pm</sup></Button></TableCell>
								<TableCell key={2} style={{borderBottom:'none'}}><Button variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1215, e.currentTarget.value)}>12:15<sup>pm</sup></Button></TableCell>

						</TableRow>
						<TableRow key={2}>

								<TableCell key={0} style={{borderBottom:'none'}}><Button variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1230, e.currentTarget.value)}>12:30<sup>pm</sup></Button></TableCell>
								<TableCell key={1} style={{borderBottom:'none'}}><Button variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1245, e.currentTarget.value)}>12:45<sup>pm</sup></Button></TableCell>
								<TableCell key={2} style={{borderBottom:'none'}}><Button variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1300, e.currentTarget.value)}>01:00<sup>pm</sup></Button></TableCell>

						</TableRow>
					</Table> :

					<Table style={{marginBottom:'4%'}}>
						<TableRow key={0}>

								<TableCell key={0} style={{borderBottom:'none'}}><Button variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1830)}>06:30<sup>pm</sup></Button></TableCell>
								<TableCell key={1} style={{borderBottom:'none'}}><Button variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1845)}>06:45<sup>pm</sup></Button></TableCell>
								<TableCell key={2} style={{borderBottom:'none'}}><Button variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1900)}>07:00<sup>pm</sup></Button></TableCell>

						</TableRow>
						<TableRow key={1}>

								<TableCell key={0} style={{borderBottom:'none'}}><Button variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1915)}>07:15<sup>pm</sup></Button></TableCell>
								<TableCell key={1} style={{borderBottom:'none'}}><Button variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1930)}>07:30<sup>pm</sup></Button></TableCell>
								<TableCell key={2} style={{borderBottom:'none'}}><Button variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1945)}>07:45<sup>pm</sup></Button></TableCell>

						</TableRow>
						<TableRow key={2}>

								<TableCell key={0} style={{borderBottom:'none'}}><Button variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(2000)}>08:00<sup>pm</sup></Button></TableCell>
								<TableCell key={1} style={{borderBottom:'none'}}><Button variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(2015)}>08:15<sup>pm</sup></Button></TableCell>
								<TableCell key={2} style={{borderBottom:'none'}}><Button variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(2030)}>08:30<sup>pm</sup></Button></TableCell>

						</TableRow>
					</Table>

					}




            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );

}

export default ComponentOne;
