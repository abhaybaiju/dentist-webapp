import React, {useState} from 'react';
import {Grid, makeStyles, Stepper, Step, StepButton, StepLabel, Button, Typography, StepConnector, Hidden} from '@material-ui/core';
import Navbar from './Navbar';
import InputForm from './InputForm.js';
import DateTime from './DateTime.js';
import Pay from './Pay.js';
import Footer from './Footer';
import bg from './images/circled-background.svg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider.js';

const VerticalStepper = () => {

  const useStyles = makeStyles((theme) => ({
    button: {
      textAlign:'center'
    },
    connectorActive: {
     '& $line': {
       animation:`$mymove 1s ${theme.transitions.easing.easeIn}`,
       animationFillMode:'forwards',
       // animationDelay:'3s'
     },
   },
   connectorCompleted: {
     '& $line': {
       borderLeft:'3px solid white',
       // animationDelay:'3s'
     },
   },
   line: {
     height:120,
     marginLeft:'20%',
     borderLeft:'2px solid rgba(0, 0, 0, 0.3)'
   },
   connectorHActive: {
     '& $lineH': {
       animation:`$mymoveH 1s ${theme.transitions.easing.easeIn}`,
       animationFillMode:'forwards',
      // animationDelay:'3s'
    },
   },
   connectorHCompleted: {
     '& $lineH': {
       borderLeft:'3px solid white',
      // animationDelay:'3s'
    },
   },
   lineH: {
     width:'80%',
     margin:'auto',
     border:'1px solid rgba(0, 0, 0, 0.3)'
   },
   label:{
     fontSize:'16px'
   },
   labelActive: {
     animation:`$mylabel 1s ${theme.transitions.easing.easeIn}`,
     animationFillMode:'forwards',
     //color:'white',
     fontSize:'17px'
   },
   labelCompleted: {
     //animation:`$myicon 1s ${theme.transitions.easing.easeIn}`,
     //animationFillMode:'forwards',
     color:'#3f3d56',
     fontSize:'17px'
   },
   icon:{
     // color: '#3f3d56',
     // paddingLeft:'50%',
     fontSize:'35px',
     "&$activeIcon": {
       fill:'#3f3d56',
       '& $text': {
         fill: 'white',
       },
     },
     "&$completedIcon": {
       animation:`$mylabel 1s ${theme.transitions.easing.easeIn}`,
       animationFillMode:'forwards',
     },
     "&$completedIconPast": {
       color:'#3f3d56'
     }
   },
   activeIcon: {},
   completedIcon: {},
   completedIconPast: {},
   "@keyframes mymove": {
     "0%": {
       borderLeft:'2px solid rgba(0, 0, 0, 0.3)'
     },
     "100%": {
       borderLeft:'3px solid white'
     }
   },
   "@keyframes mymoveH": {
     "0%": {
       border:'1px solid rgba(0, 0, 0, 0.3)'
     },
     "100%": {
       border:'2px solid white'
     }
   },
   "@keyframes myicon": {
     "0%": {
       color:'#3f3d56'
     },
     "100%": {
       color:'white'
     }
   },
   "@keyframes mylabel": {
     "0%": {
       color:'white'
     },
     "100%": {
       color:'#3f3d56'
     }
   },
   nextButton: {
     fontSize:'40px',
     border:'1px solid #3f3d56',
     color:'white',
     background:'#3f3d56',
     borderRadius:'50%',
   },
   card: {
     boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
     transition: '0.3s',
     "&:hover": {
       boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
     },
   },
   hover:{}
  }));

  //const [check, setCheck] = useState(true);

  const [{globalName, globalEmail, globalPhone, globalGender, globalAge, globalChecked, globalTime}, dispatch] = useStateValue();

  const [name, setName] = useState(globalName);
  const [email, setEmail] = useState(globalEmail);
  const [phone, setPhone] = useState(globalPhone);
  const [gender, setGender] = useState(globalGender);
  const [age, setAge] = useState(globalAge);
  const [check, setCheck] = useState(false);
  const [validname, setValidName] = useState("");
  const [validemail, setValidEmail] = useState("");
  const [validphone, setValidPhone] = useState("");

  function handleName(val) {
      setName(val);
  }
  function handleValidName(val) {
      setValidName(val);
  }
  function handleEmail(val) {
      setEmail(val);
  }
  function handleValidEmail(val) {
      setValidEmail(val);
  }
  function handlePhone(val) {
      setPhone(val);
  }
  function handleValidPhone(val) {
      setValidPhone(val);
  }
  function handleGender(val) {
      setGender(val);
  }
  function handleAge(val) {
      setAge(val);
  }
  function handleCheck(val) {
      setCheck(val);
  }

  /*const handleInputForm = () => {
    if(name ==="" || email===""|| phone===""|| gender==="" || validname!=true || validemail!=true || validphone!=true){
      console.log("Fields are empty or incorrectly filled.");
      console.log(name,email,phone,gender,"hello");
      return;
    }
    dispatch({
      type: 'SET_FORM',
      globalName: name,
      globalEmail: email,
      globalPhone: phone,
      globalGender: gender,
      globalAge: age,
      globalChecked: true
    });
  }*/

  function getSteps() {
    return ['Select date and time', 'Patient Details', 'Review your appointment'];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (<DateTime />);
      case 1:
        return (<InputForm name={name} email={email} phone={phone} gender={gender} age={age} check={check} validname={validname} validemail={validemail} validphone={validphone}
          globalName={globalName} globalEmail={globalEmail} globalPhone={globalPhone} globalGender={globalGender} globalAge={globalAge} globalChecked={globalChecked}
          onNameChange={handleName} onEmailChange={handleEmail} onPhoneChange={handlePhone} onGenderChange={handleGender}
          onAgeChange={handleAge} onCheckChange={handleCheck} onValidNameChange={handleValidName} onValidEmailChange={handleValidEmail} onValidPhoneChange={handleValidPhone}/>);
      case 2:
        return (<Pay />);
      default:
        return 'Unknown step';
    }
  }
  const classes = useStyles();
  //const [{globalName, globalEmail, globalPhone, globalGender, globalAge, globalTime, globalChecked}, dispatch] = useStateValue();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const allStepsCompleted = () => {
    return completed[2]&&completed[1]&&completed[0];
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => (prevActiveStep-1));
    const newCompleted = completed;
    newCompleted[activeStep] = false;
    setCompleted(newCompleted);
  };

  const handleNext = () => {
    const newCompleted = completed;
    if(activeStep === 0){
      console.log(activeStep);
      if(globalTime === null){
        alert("Please select a valid time slot.");
      }
      else{
        console.log("All filled out");
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        setActiveStep(prevActiveStep => (prevActiveStep+1));
      }
    } else if(activeStep === 1){
      console.log(activeStep);
      if(name === null || email === null|| phone === null|| gender === null|| age === null || check === false){
        alert("Please fill all required fields");
      } else if (validname!=true || validemail!=true || validphone!=true) {
        alert("Please enter correct values");
      } else{
        dispatch({
          type: 'SET_FORM',
          globalName: name,
          globalEmail: email,
          globalPhone: phone,
          globalGender: gender,
          globalAge: age,
          globalChecked: true
        });
        console.log("All filled out");
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        setActiveStep(prevActiveStep => (prevActiveStep+1));
      }
    } else {
      newCompleted[activeStep] = true;
      setCompleted(newCompleted);
      setActiveStep(prevActiveStep => (prevActiveStep+1));
    }
  };

  const handleStep = (step) => () => {
    if(completed[step])
      setActiveStep(step);
  };

  return (
    <Grid container alignItems="stretch" justify="center" style={{ marginLeft:'5%', marginRight:'5%', width:'90%'}}>
      <Grid item lg={3} md={3} sm={10} xs={12} style={{height:'100%', background:`url(${bg})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', marginBottom:'0%'}} classes={{root: classes.card, hover: classes.hover}}>
        <Hidden smDown>
        <Stepper activeStep={activeStep} orientation="vertical" connector={<StepConnector classes={{active:classes.connectorActive, completed:classes.connectorCompleted, line:classes.line}}/>} style={{padding:'20% 10%', background:'transparent', height:'100%', margin:'0% 0%'}}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton onClick={handleStep(index)}>
                <StepLabel StepIconProps={{ classes:{ root: classes.icon, active: classes.activeIcon, completed:(activeStep === index+1)? classes.completedIcon : classes.completedIconPast } }}>
                  <p className={(activeStep===index)?classes.labelActive:(completed[index]?classes.labelCompleted:classes.label)}>{label}</p>
                </StepLabel>
              </StepButton>
            </Step>
          ))}
        </Stepper>
        </Hidden>
        <Hidden mdUp>
        <Stepper alternativeLabel activeStep={activeStep} orientation="horizontal" connector={<StepConnector classes={{active:classes.connectorHActive, completed:classes.connectorHCompleted, line:classes.lineH}}/>} style={{padding:'8% 5%', background:'transparent', height:'100%', margin:'0% 0%'}}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton onClick={handleStep(index)}>
                <StepLabel StepIconProps={{ classes:{ root: classes.icon, active: classes.activeIcon, completed:(activeStep === index+1)? classes.completedIcon : classes.completedIconPast } }}>
                  <p className={(activeStep===index)?classes.labelActive:(completed[index]?classes.labelCompleted:classes.label)}>{label}</p>
                </StepLabel>
              </StepButton>
            </Step>
          ))}
        </Stepper>
        </Hidden>
      </Grid>
      <Grid item lg={8} md={8} sm={10} xs={12} style={{height:'100%'}} classes={{root: classes.card, hover: classes.hover}}>
        <Typography style={{margin:'5% 0%', height:'100%'}}>{getStepContent(activeStep)}</Typography>
        <div style={{textAlign:'center', marginBottom:'2%'}}>
        <Button color="primary" onClick={handleNext} style={(activeStep === steps.length - 1)?{display:'none'}:{ textAlign:'center', borderRadius:'50%'}}>
          <ExpandMoreIcon className={classes.nextButton}/>
        </Button>
        </div>
      </Grid>
    </Grid>
  );
}

//background:'rgba(188, 225, 246, 0.8)'

const Book = () => {
  return(
    <Grid style={{overflowX:'hidden'}}>
        <Grid container alignItems="center" justify="space-evenly" style={{background:'linear-gradient(to right, #f2fcfe, #1c92d2)', paddingBottom:'8%'}}>
          <Grid item lg={12} md={12} sm={12} xs={12} style={{marginBottom:'8%'}}>
            <Navbar/>
          </Grid>
          <Grid item lg={4} md={5} sm={8} xs={10} style={{color:'#2f2b4f', margin:'auto'}}>
            <h1 style={{lineHeight:'1.3', paddingTop:'5%'}}>Booking appointments made easy</h1><br/>
            <Grid item lg={12}>
              <p style={{lineHeight:'1.6'}}>Hassle-free booking for you, at your convenient time. Book now for a seamless experience.</p>
            </Grid>
          </Grid>
          <Grid item lg={4} md={5} sm={10} xs={10} style={{margin:'auto'}}>
            <img alt="illustration" src={require('./images/booking_illustration.svg')} height="400" width="100%" />
          </Grid>
        </Grid>
        <Grid style={{marginTop:'5%'}}>
          <VerticalStepper />
          <br /><br/>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} style={{marginBottom:'2%'}}>
          <Footer/>
        </Grid>
    </Grid>
  );
}

export default Book;

// linear-gradient(to right, #1c92d2, #a5d6f3 70%, #d0f4fb 90%)
