import React, { useEffect } from 'react';
import {Table, TableRow, TableCell, Card, CardHeader, CardContent, Grid, makeStyles, Button, IconButton} from '@material-ui/core';
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
import Fade from 'react-reveal/Fade';
import { setDate } from 'date-fns';

import './css/App.css';

const DateTime = () => {

  const theme = createMuiTheme({
    palette: {
  		primary: {
  			main: '#3f3d56',
        contrastText: "#FFFFFF",
  		}
  	}
  });

  const useStyles = makeStyles((theme) => ({
    tablebutton: {
      margin:'2% 2%',
      padding:'1%',
      backgroundColor: 'white',
      color:'#027e97',
      boxShadow:'none',
      borderRadius:'5px',
      borderColor:'#027e97',
      "&:hover": {
        backgroundColor: "#3f3d56",
        color:'white',
        borderRadius:'5px',
        borderColor:'#3f3d56',
      },
      "&:focus": {
        backgroundColor: "#3f3d56",
        color:'white',
        borderColor:'#3f3d56',
      }
    },
    input: {
      color: "#3f3d56",
    },
    dp:{
      width:100
    }
  }));

  const getDate = async () => {
    try{
      const resp = await axios.get('http://localhost:1337/date');
      console.log("resp is ",resp);
      return resp.data.date;
    }
    catch (error){
      console.log(error);
    }
  }
  const classes = useStyles();
  const [am, setAM] = React.useState(true);
  const [date, changeDate] = React.useState("");
  const [currentDate,setCurrentDate] = React.useState("");
  var serverDate;
  const sup="AM";
  //const pm="PM";
  //const morning = [['11:00', '11:15', '11:30'], ['11:45', '12:00', '12:15'], ['12:30', '12:45', '01:00']]
  //const evening = [['06:30', '06:45', '07:00'], ['07:15', '07:30', '07:45'], ['08:00', '08:15', '08:30']]
  const [time, setTime] = React.useState(2400);
  //const [timeText, setTimeText] = React.useState('null');
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
    localStorage.setItem("time",timeval);
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
      const serverDate = await axios.get('http://localhost:1337/date');
      console.log("currentDate is ",currentDate);
      var d = new Date(serverDate.data.date);
      if(d.getDate()===changedDate.getDate() && d.getMonth() === changedDate.getMonth() && d.getFullYear() === changedDate.getFullYear())
      {
        var currentTime = d.getHours()*100 + d.getMinutes();
        console.log("time in fetch is ",currentTime);
        var timeArr = [1100,1115,1130,1145,1200,1215,1230,1245,1300,1830,1845,1900,1915,1930,1945,2000,2015,2030];
        timeArr.forEach(t => {
          console.log(t);
          switch (t) {
            case 1100:
              if(t<=currentTime){
                setb1100(true);
              }
              break;
            case 1115:
              if(t<=currentTime){
                setb1115(true);
              }
              break;
            case 1130:
              if(t<=currentTime){
                setb1130(true);
              }
              break;
            case 1145:
              if(t<=currentTime){
                setb1145(true);
              }
              break;
            case 1200:
              if(t<=currentTime){
                setb1200(true);
              }
              break;
            case 1215:
              if(t<=currentTime){
                setb1215(true);
              }
              break;
            case 1230:
              if(t<=currentTime){
                setb1230(true);
              }
              break;
            case 1245:
              if(t<=currentTime){
                setb1245(true);
              }
              break;
            case 1300:
              if(t<=currentTime){
                setb1300(true);
              }
              break;
            case 1830:
              if(t<=currentTime){
                setb1830(true);
              }
              break;
            case 1845:
              if(t<=currentTime){
                setb1845(true);
              }
              break;
            case 1900:
              if(t<=currentTime){
                setb1900(true);
              }
              break;
            case 1915:
              if(t<=currentTime){
                setb1915(true);
              }
              break;
            case 1930:
              if(t<=currentTime){
                setb1930(true);
              }
              break;
            case 1945:
              if(t<=currentTime){
                setb1945(true);
              }
              break;
            case 2000:
              if(t<=currentTime){
                setb2000(true);
              }
              break;
            case 2015:
              if(t<=currentTime){
                setb2015(true);
              }
              break;
            case 2030:
              if(t<=currentTime){
                setb2030(true);
              }break;
            default:
              console.log("Error in past time");
          }
        });
      }
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
    console.log("chdate",changedDate)
    dispatch({
			type: 'SET_GLOBALDATE',
			globalDate: changedDate.toDateString()
		});
    changeDate(changedDate);
    fetchAppointments(changedDate);
  }

  const disableSundays = (inputDate) => {
    var diff = inputDate.getMonth() - (new Date(currentDate).getMonth())
    if(diff > 2 || diff < 0){
      return true;
    }
    return inputDate.getDay() === 0;
  }

  useEffect(() => {
    if(localStorage.getItem("time")!== null){
      console.log("timetext",localStorage.getItem("time"));
      document.getElementById(localStorage.getItem("time")).focus();
    }
    getDate().then(value => {console.log("value",value);
    const dateString = new Date(value).toDateString();
    setCurrentDate(dateString);
    console.log("inside useeffect");
    handleDateChange(new Date(value));});
  },[]);


  return(
    <Fade bottom>
    <Grid container justify="space-around" alignItems="center" spacing={0} style={{height:'100%', marginBottom:'0%'}}>
      <Grid item lg={4} md={6} sm={8} xs={12} style={{marginTop:'2%'}}>
        <h2 style={{color:'#2f2b4f', textAlign:'center', marginLeft:'-7%', marginTop:'1%', marginBottom:'10%'}}><CalendarTodayIcon style={{marginRight:'2%', marginBottom:'-1.5%'}}/>Select date</h2>
        <div style={{marginLeft:'7%'}}>
        <MuiThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker disableToolbar disablePast shouldDisableDate={disableSundays} autoOk variant="static" inputVariant="outlined" openTo="date" value={date} onChange={handleDateChange} InputProps={{ className: classes.input }}/>
          </MuiPickersUtilsProvider>
        </MuiThemeProvider>
        </div>
      </Grid>
      <Grid item lg={6} md={8} sm={10} xs={10} style={{marginRight:'-5%'}}>
        <h2 style={{color:'#2f2b4f', textAlign:'center', marginLeft:'-10%', marginTop:"-1.5%"}}><AccessTimeIcon style={{marginRight:'2%', marginBottom:'-1.5%'}}/>Select time</h2>
        <p style={{fontWeight:'600', fontSize:'15px', color:'#3f3d56', marginLeft:'0%'}}>AM</p>
        <Button disabled={b1100} id="1100" variant="outlined" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1100, e.currentTarget.value)}>11:00<sup>am</sup></Button>
        <Button disabled={b1115} id="1115 "variant="outlined" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1115, e.currentTarget.value)}>11:15<sup>am</sup></Button>
        <Button disabled={b1130} id="1130" variant="outlined" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1130, e.currentTarget.value)}>11:30<sup>am</sup></Button>
        <Button disabled={b1145} id="1145" variant="outlined" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1145, e.currentTarget.value)}>11:45<sup>am</sup></Button>
        <Button disabled={b1200} id="1200" variant="outlined" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1200, e.currentTarget.value)}>12:00<sup>pm</sup></Button>
        <Button disabled={b1215} id="1215" variant="outlined" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1215, e.currentTarget.value)}>12:15<sup>pm</sup></Button>
        <Button disabled={b1230} id="1230" variant="outlined" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1230, e.currentTarget.value)}>12:30<sup>pm</sup></Button>
        <Button disabled={b1245} id="1245" variant="outlined" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1245, e.currentTarget.value)}>12:45<sup>pm</sup></Button>
        <Button disabled={b1300} id="1300" variant="outlined" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1300, e.currentTarget.value)}>01:00<sup>pm</sup></Button>
        <p style={{fontWeight:'600', fontSize:'15px', color:'#3f3d56', marginLeft:'2%'}}>PM</p>
        <Button disabled={b1830} id="1830" variant="outlined" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1830)}>06:30<sup>pm</sup></Button>
        <Button disabled={b1845} id="1845" variant="outlined" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1845)}>06:45<sup>pm</sup></Button>
        <Button disabled={b1900} id="1900" variant="outlined" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1900)}>07:00<sup>pm</sup></Button>
        <Button disabled={b1915} id="1915" variant="outlined" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1915)}>07:15<sup>pm</sup></Button>
        <Button disabled={b1930} id="1930" variant="outlined" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1930)}>07:30<sup>pm</sup></Button>
        <Button disabled={b1945} id="1945" variant="outlined" className={classes.tablebutton} onClick={(e)=>handleTimeChange(1945)}>07:45<sup>pm</sup></Button>
        <Button disabled={b2000} id="2000" variant="outlined" className={classes.tablebutton} onClick={(e)=>handleTimeChange(2000)}>08:00<sup>pm</sup></Button>
        <Button disabled={b2015} id="2015" variant="outlined" className={classes.tablebutton} onClick={(e)=>handleTimeChange(2015)}>08:15<sup>pm</sup></Button>
        <Button disabled={b2030} id="2030" variant="outlined" className={classes.tablebutton} onClick={(e)=>handleTimeChange(2030)}>08:30<sup>pm</sup></Button>
      </Grid>
    </Grid>
    </Fade>
  );

}

export default DateTime;

/*



*/
