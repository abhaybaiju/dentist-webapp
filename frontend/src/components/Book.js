import React from 'react';
import {Card, Container, Grid, makeStyles, Stepper, Step, StepLabel, Button, Typography} from '@material-ui/core';
import Navbar from './Navbar';
import {Redirect } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';
import Footer from './Footer';

const Process = () => {
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
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    setActiveStep(prevActiveStep => (prevActiveStep+1));
  };

  return (
    <Grid style={{overflowX:'hidden'}}>
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
}

const Book = () => {
  return(
    <Container style={{overflowX:'hidden'}}>
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
          <br /><br/>
        </Grid>
      </Grid>
      <Footer top="0%" bottom="2%" left="5%" right="-45%"/>
    </Container>
  );
}

export default Book;
