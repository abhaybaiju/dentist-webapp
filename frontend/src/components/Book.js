import React, {useState} from 'react';
import {Card, CardContent, Grid, makeStyles, Stepper, Step, StepButton, StepContent, StepLabel, Button, Typography, Table, TableRow, TableCell, Slide, StepConnector} from '@material-ui/core';
import Navbar from './Navbar';
import InputForm from './InputForm.js';
import DateTime from './DateTime.js';
import Pay from './Pay.js';
import Footer from './Footer';
import bg from './images/circled-background.svg';
import {Redirect } from 'react-router-dom';
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
      <Grid item lg={3} style={{height:570, background:`url(${bg})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}} classes={{root: classes.card, hover: classes.hover}}>
        <Stepper activeStep={activeStep} orientation="vertical" connector={<StepConnector classes={{active:classes.connectorActive, completed:classes.connectorCompleted, line:classes.line}}/>} style={{margin:'10% 5%', background:'transparent', height:200}}>
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
      </Grid>
      <Grid item lg={8} style={{height:570}} classes={{root: classes.card, hover: classes.hover}}>
        <Typography style={{margin:'5% 0%'}}>{getStepContent(activeStep)}</Typography>
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
        <Grid container alignItems="center" justify="space-evenly" style={{background:'linear-gradient(to right, #f2fcfe, #1c92d2)', paddingBottom:'10%'}}>
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
            <img alt="illustration" src={require('./images/booking_illustration.svg')} height="400"/>
          </Grid>
        </Grid>
        <Grid style={{marginTop:'5%'}}>
          <VerticalStepper />
          <br /><br/>
        </Grid>
        <Grid item lg={12}>
          <Footer top="2%" bottom="2%" left="12%" right="-25%"/>
        </Grid>
    </Grid>
  );
}

export default Book;

// linear-gradient(to right, #1c92d2, #a5d6f3 70%, #d0f4fb 90%)
