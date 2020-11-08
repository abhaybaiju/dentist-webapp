import React from 'react';
import {Grid} from '@material-ui/core';

const Refunds = () => {
  return(
    <Grid container justify="center" alignItems="center">
      <Grid item lg={10} md={10} sm={10} xs={10} style={{marginTop:'5%'}}>
        <h1 style={{color:'#3f3d56', textAlign:'center'}}>Cancellation/Refund Policy</h1>
      </Grid>
      <Grid item lg={6} md={10} sm={10} xs={10} style={{color:'#404040', textAlign:'justify', lineHeight:'1.5', marginBottom:'5%'}}>
      <br /><h3 style={{color:'#3f3d56'}}>Refunds</h3><br/>
        Our policy prevents us from providing refunds after the appointment due to the nature of our services provided. For further enquiries contact us at 011-28533236 or drcsbaiju@yahoo.co.in<br/><br/>
        <br /><h3 style={{color:'#3f3d56'}}>Cancellations</h3><br/>
        An appointment once booked can be cancelled and the amount will be refunded in full. To cancel appointments, please contact us at 011-28533236.
      </Grid>
    </Grid>
  )
}

export default Refunds;
