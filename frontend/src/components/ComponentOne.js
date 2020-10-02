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
import axios from 'axios';

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
  const [b1100,setb1100] = React.useState(false);
  const [b1115,setb1115] = React.useState(false);
  const [b1130,setb1130] = React.useState(false);
  const [b1145,setb1145] = React.useState(false);
  const [b1200,setb1200] = React.useState(false);
  const [b1215,setb1215] = React.useState(false);
  const [b1230,setb1230] = React.useState(false);
  const [b1245,setb1245] = React.useState(false);
  const [b1300,setb1300] = React.useState(false);
  const [b1830,setb1830] = React.useState(false);
  const [b1845,setb1845] = React.useState(false);
  const [b1900,setb1900] = React.useState(false);
  const [b1915,setb1915] = React.useState(false);
  const [b1930,setb1930] = React.useState(false);
  const [b1945,setb1945] = React.useState(false);
  const [b2000,setb2000] = React.useState(false);
  const [b2015,setb2015] = React.useState(false);
  const [b2030,setb2030] = React.useState(false);
  const [{globalTime, globalTimeText}, dispatch] = useStateValue();

  const handleTimeChange = (timeval, text) => {
		setTime(timeval);
		dispatch({
			type: 'SET_GLOBALTIME',
			globalTime: timeval,
      globalTimeText: text
		});

  }

  const fetchAppointments = async (changedDate) => {
    try{
      setb1100(false);
      setb1115(false);
      setb1130(false);
      setb1145(false);
      setb1200(false);
      setb1215(false);
      setb1230(false);
      setb1245(false);
      setb1300(false);
      setb1830(false);
      setb1845(false);
      setb1900(false);
      setb1915(false);
      setb1930(false);
      setb1945(false);
      setb2000(false);
      setb2015(false);
      setb2030(false);

      console.log("Date in fetch is ",changedDate)
      const resp = await axios.get('http://localhost:1337/slotfetcher',{ params: { "date": changedDate.toDateString() } });
      console.log(resp.data);
      for(var row=0;row<resp.data.rowCount;row++){
        var bookedTime = resp.data.rows[row].time;
        switch (bookedTime) {
          case 1100:
            setb1100(true);
            break;
          case 1115:
            setb1115(true);
            break;
          case 1130:
            setb1130(true);
            break;
          case 1145:
            setb1145(true);
            break;
          case 1200:
            setb1200(true);
            break;
          case 1215:
            setb1215(true);
            break;
          case 1230:
            setb1230(true);
            break;
          case 1245:
            setb1245(true);
            break;
          case 1300:
            setb1300(true);
            break;
          case 1830:
            setb1830(true);
            break;
          case 1845:
            setb1845(true);
            break;
          case 1900:
            setb1900(true);
            break;
          case 1915:
            setb1915(true);
            break;
          case 1930:
            setb1930(true);
            break;
          case 1945:
            setb1945(true);
            break;
          case 2000:
            setb2000(true);
            break;
          case 2015:
            setb2015(true);
            break;
          case 2030:
            setb2030(true);
            break;
          default:
            console.log("Invalid Time Code");
        }
      }
    }
    catch(err){
      console.log(err);
    }

  }

  const handleDateChange = (changedDate) => {
    dispatch({
			type: 'SET_GLOBALDATE',
			globalDate: changedDate.toDateString()
		});
    changeDate(changedDate);
    fetchAppointments(changedDate);
  }

  const disableSundays = (date) => {
    return date.getDay() === 0;
  }

  React.useEffect(() => {
    console.log("inside useeffect");
    handleDateChange(new Date());
  },[]);


  return(
    <Grid style={{marginRight:'8%', marginLeft:'8%'}}>
      <Grid container justify="space-evenly" alignItems="stretch" spacing={1}>
        <Grid item lg={5}>
          <h3 style={{color:'#027e97'}}><CalendarTodayIcon style={{marginRight:'2%', marginBottom:'-1.5%'}}/>Select date</h3>
          <Card variant="outlined">
            <CardContent style={{ marginTop:'5%'}}>
            <MuiThemeProvider theme={theme}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker disableToolbar disablePast shouldDisableDate={disableSundays} autoOk variant="static" openTo="date" value={date} onChange={handleDateChange} InputProps={{ className: classes.input }}/>
              </MuiPickersUtilsProvider>
            </MuiThemeProvider>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={5}>
          <h3 style={{color:'#027e97'}}><AccessTimeIcon style={{marginRight:'2%', marginBottom:'-1.5%'}}/>Select time</h3>
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
      								<TableCell key={0} style={{borderBottom:'none'}}><Button disabled={b1100} id="1100" variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1100, e.currentTarget.value)}>11:00<sup>am</sup></Button></TableCell>
      								<TableCell key={1} style={{borderBottom:'none'}}><Button disabled={b1115} variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1115, e.currentTarget.value)}>11:15<sup>am</sup></Button></TableCell>
      								<TableCell key={2} style={{borderBottom:'none'}}><Button disabled={b1130} variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1130, e.currentTarget.value)}>11:30<sup>am</sup></Button></TableCell>
                  </TableRow>
      						<TableRow key={1}>

      								<TableCell key={0} style={{borderBottom:'none'}}><Button disabled={b1145} variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1145, e.currentTarget.value)}>11:45<sup>am</sup></Button></TableCell>
      								<TableCell key={1} style={{borderBottom:'none'}}><Button disabled={b1200} variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1200, e.currentTarget.value)}>12:00<sup>pm</sup></Button></TableCell>
      								<TableCell key={2} style={{borderBottom:'none'}}><Button disabled={b1215} variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1215, e.currentTarget.value)}>12:15<sup>pm</sup></Button></TableCell>

      						</TableRow>
      						<TableRow key={2}>

      								<TableCell key={0} style={{borderBottom:'none'}}><Button disabled={b1230} variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1230, e.currentTarget.value)}>12:30<sup>pm</sup></Button></TableCell>
      								<TableCell key={1} style={{borderBottom:'none'}}><Button disabled={b1245} variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1245, e.currentTarget.value)}>12:45<sup>pm</sup></Button></TableCell>
      								<TableCell key={2} style={{borderBottom:'none'}}><Button disabled={b1300} variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1300, e.currentTarget.value)}>01:00<sup>pm</sup></Button></TableCell>

      						</TableRow>
      					</Table>
                :
    					  <Table style={{marginBottom:'4%'}}>
      						<TableRow key={0}>

      								<TableCell key={0} style={{borderBottom:'none'}}><Button disabled={b1830} variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1830)}>06:30<sup>pm</sup></Button></TableCell>
      								<TableCell key={1} style={{borderBottom:'none'}}><Button disabled={b1845} variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1845)}>06:45<sup>pm</sup></Button></TableCell>
      								<TableCell key={2} style={{borderBottom:'none'}}><Button disabled={b1900} variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1900)}>07:00<sup>pm</sup></Button></TableCell>

      						</TableRow>
      						<TableRow key={1}>

      								<TableCell key={0} style={{borderBottom:'none'}}><Button disabled={b1915} variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1915)}>07:15<sup>pm</sup></Button></TableCell>
      								<TableCell key={1} style={{borderBottom:'none'}}><Button disabled={b1930} variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1930)}>07:30<sup>pm</sup></Button></TableCell>
      								<TableCell key={2} style={{borderBottom:'none'}}><Button disabled={b1945} variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1945)}>07:45<sup>pm</sup></Button></TableCell>

      						</TableRow>
      						<TableRow key={2}>

      								<TableCell key={0} style={{borderBottom:'none'}}><Button disabled={b2000} variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(2000)}>08:00<sup>pm</sup></Button></TableCell>
      								<TableCell key={1} style={{borderBottom:'none'}}><Button disabled={b2015} variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(2015)}>08:15<sup>pm</sup></Button></TableCell>
      								<TableCell key={2} style={{borderBottom:'none'}}><Button disabled={b2030} variant="contained" className={classes.tablebutton} onClick={(e)=>handleTimeChange(2030)}>08:30<sup>pm</sup></Button></TableCell>

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
