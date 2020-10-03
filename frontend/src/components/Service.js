import React from 'react';
import {Grid} from '@material-ui/core';
import Navbar from './Navbar';
import Footer from './Footer';

const Service = () => {
  return(
    <Grid>
      <Navbar />
      <Grid container justify="center" alignItems="center">
      </Grid>
      <Footer top="0" bottom="2" left="20" right="-20"/>
    </Grid>
  );
}

export default Service;
