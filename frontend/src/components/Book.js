import React from 'react';
import {Table, TableRow, TableCell, Card, CardHeader, CardContent, Container, Grid, makeStyles, Stepper, Step, StepButton, StepLabel, Button, Typography, StepIcon} from '@material-ui/core';
import Navbar from './Navbar';
import {Redirect } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';

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
  step: {
    textAlign:'center',
    width:'100%',
    padding:'0.5%'
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
  completedIcon: {},
  label:{
    "&$activeLabel": {
      color:'white',
      '& $text': {
        color: '#ff7a59',
      },
    },
    "&$completedLabel": {
      color: 'white'
    }
  },
  activeLabel: {},
  completedLabel: {}
}));

const One = () => {
  const classes = useStyles();
  const [am, setAM] = React.useState(true);
  const sup="AM";
  const pm="PM";
  const morning = [['11:00', '11:15', '11:30'], ['11:45', '12:00', '12:15'], ['12:30', '12:45', '01:00']]
  const evening = [['06:30', '06:45', '07:00'], ['07:15', '07:30', '07:45'], ['08:00', '08:15', '08:30']]
  return(
    <Grid style={{marginRight:'5%', marginLeft:'5%'}}>
      <Grid container justify="center" alignItems="baseline" spacing={10}>
        <Grid item lg={6}>
          <h3>Pick your date</h3>
        </Grid>
        <Grid item lg={6}>
          <h3>Pick your time</h3>
        </Grid>
      </Grid>
      <Grid container justify="space-evenly" alignItems="baseline" spacing={10}>
        <Grid item lg={6}>
          <Card variant="outlined">
            <CardContent style={{marginLeft:'14%', marginTop:'5%'}}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker disableToolbar autoOk variant="static" openTo="date" value={date} onChange={changeDate}/>
              </MuiPickersUtilsProvider>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={6}>
          <Card variant="outlined" style={{width:'100%'}}>
            <CardHeader>

            </CardHeader>
            <CardContent>
            <Button variant="contained" className={classes.button} onClick={() => setAM(true)}>AM</Button>
            <Button variant="contained" className={classes.button} onClick={() => setAM(false)}>PM</Button>
              <Table >
                {(am)?morning.map((timeList,i) =>(
                   <TableRow key={i} >
                    {timeList.map((time,j)=>
                         <TableCell key={j}>{time}<sup>{(time==='11:00'||time==='11:15'||time==='11:30'||time==='11:45')?sup:pm}</sup></TableCell>
                    )}
                   </TableRow>
                ))
                : evening.map((timeList,i) =>(
                   <TableRow key={i}>
                    {timeList.map((time,j)=>
                         <TableCell key={j}>{time}<sup>{pm}</sup></TableCell>
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
      <Grid>
        <Stepper nonLinear activeStep={activeStep} connector={false}>
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
