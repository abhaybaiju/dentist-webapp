import React, {useState} from 'react';
import {Card, CardContent, Grid, makeStyles, Stepper, Step, StepContent, StepLabel, Button, Typography, Table, TableRow, TableCell, Slide} from '@material-ui/core';
import Navbar from './Navbar';
import InputForm from './InputForm.js';
import DateTime from './DateTime.js';
import Footer from './Footer';

import {Redirect } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
/*import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'; */
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';

import { useStateValue } from './StateProvider.js';



/*const Process1 = () => {
  const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
    backgroundColor: 'white',
    color:'#ff7a59',
    boxShadow:'none',
    "&:hover": {
      backgroundColor: "white",
      boxShadow:'none',
      textShadow: '0 0 1px #ff7a59'
    }
  },
  step: {
    textAlign:'center',
    width:'100%',
  },
  completed: {
    display: 'inline-block',
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

function getSteps() {
  return ['Confirm date and time', 'Patient Details', 'Confirm your appointment'];
}


function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <ComponentOne />
      );
    case 1:
      return (
        <ComponentTwo />
      );
    case 2:
      return (
        <ComponentThree />
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
  const [{globalName, globalEmail, globalPhone, globalGender, globalAge}, dispatch] = useStateValue();

  const completedSteps = () => {
    return completed[2]&&completed[1]&&completed[0];
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
    if(activeStep === 1){
      console.log(activeStep);
      if(globalName === null || globalEmail === null|| globalPhone === null|| globalGender === null|| globalAge === null){
        alert("Please fill all required fields");
      }
      else{
        console.log("All filled out");
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        setActiveStep(prevActiveStep => (prevActiveStep+1));
      }
    }
    else{
      newCompleted[activeStep] = true;
      setCompleted(newCompleted);
      setActiveStep(prevActiveStep => (prevActiveStep+1));
    }
  };

  return (
    <Grid style={{overflowX:'hidden', marginLeft:'5%', marginRight:'5%'}}>
        <Card variant="outlined" style={{width:'80%', marginLeft:'10%', marginTop:'5%'}}>
          <Grid>
            <Stepper nonLinear activeStep={activeStep} connector={false} style={{background:"#f8faf9", height:'10%'}}>
                {steps.map((label, index) => (
                    <Step key={label} className={classes.step}>
                      <StepLabel completed={completed[index]}  StepIconProps={{ classes:{ root: classes.icon, active: classes.activeIcon, completed: classes.completedIcon } }}>
                        <p style={(completed[index] || activeStep===index)?{color:'#ff7a59'}:{color:'grey'}}>{label}</p>
                      </StepLabel>
                    </Step>
                ))}
            </Stepper>
          </Grid>
          <Grid>
            {allStepsCompleted() ? (
              <Grid>
                <Typography className={classes.instructions}>
                  <Redirect to="/Success"/>
                </Typography>
              </Grid>
            ) : (
              <Grid>
                <Typography>{getStepContent(activeStep)}</Typography>
                <Grid container justify="space-between" alignItems="center" style={{marginTop:'5%', marginBottom:'1%'}}>
                  <Grid item>
                  <Button disabled={(activeStep === 0)?true:false} onClick={handleBack} className={classes.button} style={{marginLeft:'15%'}}>
                    <ArrowBackIosIcon />Back
                  </Button>
                  </Grid>
                  <Grid item>
                  <Button variant="contained" style={(activeStep===2)?{display:'none'}:null} className={classes.button} onClick={handleComplete}>
                    <ArrowForwardIosIcon />Complete Step
                  </Button>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Card>
      </Grid>
    );
  }

  return(
    <HorizontalNonLinearStepper />
  );
}*/

const Process = () => {

  const [{globalName, globalEmail, globalPhone, globalGender, globalAge, globalTime}, dispatch] = useStateValue();
  const [valid, setValid] = useState(false);

  const handleComplete = () => {
    if(globalName === null || globalEmail === null|| globalPhone === null|| globalGender === null|| globalAge === null){
      alert("Please fill all required fields");
    } else if (globalTime === null) {
      alert("Please select a valid time slot");
    } else {
      setValid(true);
    }
  }

  return(
    <Grid container justify="space-evenly" alignItems="center" style={{marginLeft:'1%', marginRight:'10%'}}>
      { valid ? (
          <>
          <Grid item lg={12}>
            <p>Verify your details</p>
          </Grid>
          <ComponentThree />
          </>
        ):
        (
          <>
          <Grid item lg={12}>
            <p style={{textAlign:'center', fontWeight:'600', color:'#3f3d56', background:'#ececed'}}>Book your appointment</p>
          </Grid>
          <Grid item lg={5}>
            <InputForm />
            <Button onClick={handleComplete}>Book my appointment</Button>
          </Grid>
          <Grid item lg={5}>
            <DateTime />
          </Grid>
          </>
        )
      }
    </Grid>
  )
}

const VerticalStepper = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(2),
      marginRight: theme.spacing(1),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }));

  //const [check, setCheck] = useState(true);

  function getSteps() {
    return ['Select date and time', 'Patient Details', 'Review your appointment'];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (<DateTime />);
      case 1:
        return (<InputForm />);
      case 2:
        return (<ComponentThree />);
      default:
        return 'Unknown step';
    }
  }
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Grid container alignItems="stretch" justify="center" style={{border:'1px solid black', marginLeft:'5%', marginRight:'5%', width:'90%'}}>
      <Grid item lg={3} style={{background:'grey'}}>
        <Stepper activeStep={activeStep} orientation="vertical" style={{margin:'20% 0%', background:'transparent'}}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
      <Grid item lg={8}>
        <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={{appear: 500, enter: 300, exit: 500,}}>
          <div>
            <Typography style={{margin:'5% 0%'}}>{getStepContent(activeStep)}</Typography>
            <div className={classes.actionsContainer}>
              <div style={{textAlign:'center'}}>
                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button} style={{float:'left', display:'none'}}>
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext} className={classes.button} style={(activeStep === steps.length - 1)?{display:'none'}:{borderRadius:'50%'}}>
                  <ExpandMoreIcon style={{fontSize:'30px', margin:'0'}}/>
                </Button>
              </div>
            </div>
          </div>
        </Slide>
      </Grid>
    </Grid>
  );
}

const Book = () => {
  return(
    <Grid style={{overflowX:'hidden'}}>
        <Grid container alignItems="center" justify="space-evenly" style={{background:'linear-gradient(to right, #f2fcfe, #1c92d2)', paddingBottom:'15%'}}>
          <Grid item lg={12} style={{marginBottom:'8%'}}>
            <Navbar/>
          </Grid>
          <Grid item lg={3} style={{color:'#2f2b4f'}}>
            <h1 style={{lineHeight:'1.3'}}>Booking appointments made easy</h1><br/>
            <Grid item lg={12}>
              <p style={{lineHeight:'1.6'}}>Hassle-free booking for you at your convenient time. Hassle-free booking for you at your convenient time.</p>
            </Grid>
          </Grid>
          <Grid item lg={4}>
            <img alt="..." src={require('./images/booking_illustration.svg')} height="400"/>
          </Grid>
        </Grid>
        <Grid style={{marginTop:'5%'}}>
          <VerticalStepper />
          <br /><br/>
        </Grid>
      <Footer top="2%" bottom="2%" left="12%" right="-25%"/>
    </Grid>
  );
}

export default Book;
