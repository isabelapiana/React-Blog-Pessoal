import React from 'react';
// import { Grid } from '@material-ui/core';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
  
      <Provider store={store}>
        <Router>
          <Navbar />
          <div style={{ minHeight: '100vh' }}>
            <Routes> // Antigo Switch
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastrousuario" element={<CadastroUsuario />} />
              <Route path="/tema" element={<ListaTema />} />
              <Route path="/posts" element={<ListaPostagem />} />
              <Route path="/formularioPostagem" element={<CadastroPost />} />
              <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
              <Route path="/formularioTema" element={<CadastroTema />} />
              <Route path="/formularioTema/:id" element={<CadastroTema />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </Provider>

  )
}


export default App;
