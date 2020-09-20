import React from 'react';
import {MuiThemeProvider, createMuiTheme, Container, Grid, makeStyles, Stepper, Step, StepButton, StepLabel, Button, Typography, StepIcon} from '@material-ui/core';
import Navbar from './Navbar';
import {Redirect } from 'react-router-dom';

const Process = () => {
  const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
    backgroundColor: '#ff7a59',
    color:'white',
    "&:hover": {
      backgroundColor: "#ff7a59"
    }
  },
  step: {
    textAlign:'center',
    width:'100%',
    border:'1px solid grey',
    borderRadius:'50px',
    padding:'0.5%'
  },
  completestep: {
    textAlign:'center',
    width:'100%',
    border:'1px solid #ff7a59',
    borderRadius:'50px',
    backgroundColor:'#ff7a59',
    padding:'0.5%'
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  icon:{
    color: '#ff7a59',
    paddingLeft:'50%',
    "&$activeIcon": {
      fill:'white',
      '& $text': {
        fill: '#ff7a59',
      },
    },
    "&$completedIcon": {
      color: 'white'
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

function getSteps() {
  return ['Confirm date and time', 'Patient Details', 'Confirm your appointment'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <Grid>
          Step 1: Select campaign settings...
        </Grid>
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
      <MuiThemeProvider>
        <Stepper nonLinear activeStep={activeStep} connector={false}>
            {steps.map((label, index) => (
                <Step key={label} className={(activeStep === index || completed[index]) ? classes.completestep : classes.step}>
                  <StepLabel completed={completed[index]}  StepIconProps={{ classes:{ root: classes.icon, active: classes.activeIcon, completed: classes.completedIcon } }}>
                    <p >{label}</p>
                  </StepLabel>
                </Step>
            ))}
        </Stepper>
      </MuiThemeProvider>
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
)
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
