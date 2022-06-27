import React from 'react';
import { Grid } from '@material-ui/core';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';

/*
function App() {
  return (
    <Home />
  );
}
*/

/*
function App() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Home/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Home/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Home/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home/>
        </Grid>
      </Grid>
    </>
  );
}
*/

function App() {
  return(
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  )
}



export default App;