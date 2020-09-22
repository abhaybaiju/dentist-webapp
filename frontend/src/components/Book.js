import React from 'react';
import {Table, TableRow, TableCell, Card, CardHeader, CardContent, Container, Grid, makeStyles, Stepper, Step, StepButton, StepLabel, Button, Typography, StepIcon} from '@material-ui/core';
import Navbar from './Navbar';
import {Redirect } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const Process = () => {
  const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
    backgroundColor: 'white',
    color:'#ff7a59',
    border:'1px solid #ff7a59',
    "&:hover": {
      backgroundColor: "#ff7a59",
      color:'white'
    }
  },
  tablebutton: {
    marginRight: theme.spacing(1),
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
  step: {
    textAlign:'center',
    width:'100%',
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
  },
  icon:{
    color: 'grey',
    paddingLeft:'50%',
    "&$activeIcon": {
      fill:'#ff7a59',
      '& $text': {
        fill: '#white',
      },
    },
    "&$completedIcon": {
      color: '#ff7a59'
    }
  },
  activeIcon: {},
  completedIcon: {}
}));

const One = () => {
  const classes = useStyles();
  const [am, setAM] = React.useState(true);
  const sup="AM";
  const pm="PM";
  const morning = [['11:00', '11:15', '11:30'], ['11:45', '12:00', '12:15'], ['12:30', '12:45', '01:00']]
  const evening = [['06:30', '06:45', '07:00'], ['07:15', '07:30', '07:45'], ['08:00', '08:15', '08:30']]
  return(
    <Grid style={{marginRight:'8%', marginLeft:'8%'}}>
      <Grid container justify="space-evenly" alignItems="stretch" spacing={1}>
        <Grid item lg={5}>
          <h3 style={{color:'#027e97'}}><CalendarTodayIcon style={{marginRight:'2%', marginBottom:'-1.5%'}}/>Select date</h3>
          <Card variant="outlined">
            <CardContent style={{ marginTop:'5%'}}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker disableToolbar disablePast autoOk variant="static" openTo="date" value={date} onChange={changeDate} InputProps={{ className: classes.input }}/>
              </MuiPickersUtilsProvider>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={5}>
          <h3 style={{color:'#027e97'}}><AccessTimeIcon style={{marginRight:'2%', marginBottom:'-1.5%'}}/>Select time</h3>
          <Card variant="outlined">
            <CardHeader title={(am)?"Morning":"Evening"} action={
              <IconButton aria-label="Next" onClick={() => setAM(!am)} disabled={(am)?false:true}>
                <ArrowForwardIosIcon />
              </IconButton>} avatar={
                <IconButton aria-label="Next" onClick={() => setAM(!am)} disabled={(am)?true:false}>
                  <ArrowBackIosIcon />
                </IconButton>} style={{ marginTop:'5%',  textAlign:'center'}}/>
            <CardContent>
              <Table>
                {(am)?morning.map((timeList,i) =>(
                   <TableRow key={i} >
                    {timeList.map((time,j)=>
                         <TableCell key={j} style={{borderBottom:'none'}}><Button variant="contained" className={classes.tablebutton}>{time}<sup>{(time==='11:00'||time==='11:15'||time==='11:30'||time==='11:45')?sup:pm}</sup></Button></TableCell>
                    )}
                   </TableRow>
                ))
                : evening.map((timeList,i) =>(
                   <TableRow key={i}>
                    {timeList.map((time,j)=>
                         <TableCell key={j} style={{borderBottom:'none'}}><Button variant="contained" className={classes.tablebutton}>{time}<sup>{pm}</sup></Button></TableCell>
                    )}
                   </TableRow>
                ))}
              </Table>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

function getSteps() {
  return ['Confirm date and time', 'Patient Details', 'Confirm your appointment'];
}

const [date, changeDate] = React.useState(new Date());

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <One />
      );
    case 1:
      return (
        <Grid>
          Step 2: Select campaign settings...
        </Grid>
      );
    case 2:
      return (
        <Grid>
          Step 3: Select campaign settings...
        </Grid>
      );
    default:
      return 'Unknown step';
  }
}

function HorizontalNonLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const completedSteps = () => {
    return completed[2]&&completed[1]&&completed[0];
  };

  const isLastStep = () => {
    return activeStep === 2;
  };

  const allStepsCompleted = () => {
    return completedSteps();
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => (prevActiveStep-1));
    const newCompleted = completed;
    newCompleted[activeStep] = false;
    setCompleted(newCompleted);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    setActiveStep(prevActiveStep => (prevActiveStep+1));
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted(0);
  };

  return (
    <Grid>
      <Card variant="outlined" style={{width:'80%', marginLeft:'10%', marginTop:'10%'}}>
        <Grid>
          <Stepper nonLinear activeStep={activeStep} connector={false} style={{background:"#f8faf9", height:'10%'}}>
              {steps.map((label, index) => (
                  <Step key={label} className={classes.step}>
                    <StepLabel completed={completed[index]}  StepIconProps={{ classes:{ root: classes.icon, active: classes.activeIcon, completed: classes.completedIcon } }}>
                      <p >{label}</p>
                    </StepLabel>
                  </Step>
              ))}
          </Stepper>
        </Grid>
        <div>
          {allStepsCompleted() ? (
            <div>
              <Typography className={classes.instructions}>
                <Redirect to="/Pay"/>
              </Typography>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div>
                <Button style= {{display: (activeStep === 0) ? 'none' : ''}} onClick={handleBack} className={classes.button}>
                  Back
                </Button>
                <Button variant="contained" className={classes.button} onClick={handleComplete}>
                  {completedSteps() ? 'Finish' : 'Complete Step'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </Grid>
  );
}


return(
  <HorizontalNonLinearStepper />
);
}

const Book = () => {
  return(
    <Container>
      <Grid>
        <Grid>
          <Navbar/>
        </Grid>
        <Grid container alignItems="center" justify="space-evenly" style={{background:'#d3eaf0', marginTop:'8%', borderRadius:'50px'}}>
          <Grid item lg={4} style={{color:'#027e97'}}>
            <h1 style={{lineHeight:'1.3'}}>Booking appointments made easy</h1><br/>
            <Grid item lg={8}>
              <p style={{lineHeight:'1.6'}}>Hassle-free booking for you at your convenient time. Hassle-free booking for you at your convenient time.</p>
            </Grid>
          </Grid>
          <Grid item lg={5}>
            <img alt="..." src={require('./images/booking_illustration.svg')} height="400"/>
          </Grid>
        </Grid>
        <Grid>
          {/*calendar and date picker*/}
          <Process />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Book;
