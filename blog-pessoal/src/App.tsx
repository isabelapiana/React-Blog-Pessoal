import React from 'react';
// import { Grid } from '@material-ui/core';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
  return (
    <>
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes> // Antigo Switch
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
        
          </Routes>
        </div>
        <Footer />
      </Router>

    </>
  )
}


//<Route path="/cadastro" element={<CadastroUsuario />} />
export default App;
