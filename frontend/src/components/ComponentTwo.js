import React from 'react';
import {Table, TableRow, TableCell, Card, CardHeader, CardContent, Grid, makeStyles, Button, IconButton} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const ComponentTwo = () => {
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

const Two = () => {
  const classes = useStyles();
  const [am, setAM] = React.useState(true);
  const [date, changeDate] = React.useState(new Date());
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
              <IconButton aria-label="Next" onClick={() => setAM(!am)} disabled={(am)?false:true} style={{marginTop:'16%'}}>
                <ArrowForwardIosIcon />
              </IconButton>} avatar={
                <IconButton aria-label="Next" onClick={() => setAM(!am)} disabled={(am)?true:false} style={{marginLeft:'55%'}}>
                  <ArrowBackIosIcon />
                </IconButton>} style={{ marginTop:'8%',  textAlign:'center', marginLeft:'-10%'}}/>
            <CardContent>
              <Table style={{marginBottom:'4%'}}>
                {(am)?morning.map((timeList,i) =>(
                   <TableRow key={i}>
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

return(
  <Two />
);

}

export default ComponentTwo;
