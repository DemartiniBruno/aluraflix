import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

function NotFound(){
  return(
    <div>
      <h1>404</h1>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes> 
      <Route path='/' element={<Home/>}/>
      <Route path='/cadastro/video' element={<CadastroVideo></CadastroVideo>}/>
      <Route path='/cadastro/categoria' element={<CadastroCategoria></CadastroCategoria>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

//Arquivo que vai iniciar a aplicação