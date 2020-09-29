import React from 'react';
import Navbar from './Navbar';
import {Container, Grid, Table, TableRow, TableCell} from '@material-ui/core';

const Contact = () => {
  return(
      <Grid>
        <Grid>
          <Navbar/>
        </Grid>
        <Grid container alignItems="center" justify="space-evenly" style={{background:'#d3eaf0', marginTop:'6.5%'}}>
          <Grid item lg={5} style={{color:'#3f3d56'}}>
            <h1 style={{textAlign:'center', marginLeft:'5%', fontSize:'40px'}}>CONTACT US</h1>
            <p style={{marginLeft:'32%', lineHeight:'1.4', fontSize:'20px'}}>We are founded by a leading academic and researcher in the field of Industrial Systems Engineering.</p>
          </Grid>
          <Grid item lg={7} style={{marginTop:'3%'}}>
            <img alt="..." src={require('./images/contact.svg')} height="400"/>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justify="space-evenly">
          <Grid item lg={6} style={{color:'#3f3d56', marginTop:'3%'}}>
            <h3 style={{marginLeft:'27%',fontSize:'30px'}}>Contact details</h3>
            <p style={{marginLeft:'27%', lineHeight:'1.6', marginRight:'2%', fontSize:'16px', marginTop:'1%'}}>Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.</p>
            <Table>
              <TableRow>
                <TableCell style={{borderBottom:'none'}}></TableCell>
                <TableCell style={{borderBottom:'none'}}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{borderBottom:'none'}}></TableCell>
                <TableCell style={{borderBottom:'none'}}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{borderBottom:'none'}}></TableCell>
                <TableCell style={{borderBottom:'none'}}></TableCell>
              </TableRow>
            </Table>
          </Grid>
          <Grid item lg={6}>
          </Grid>
        </Grid>
      </Grid>
  );
}

export default Contact;
