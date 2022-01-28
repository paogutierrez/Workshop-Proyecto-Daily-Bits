import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Estadistica from '../components/Estadistica';
import Footer from '../components/Footer';
import Home from '../components/Home';
import { Login } from '../components/Login';
import Perfil from '../components/Perfil';
import Questions from '../components/Questions';

const AppRouter = () => {
  return <div>
      <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/questions/:id" element={<Questions/>} />
            <Route path="/" element={<Login/>} /> 
            <Route path="/perfil" element={<Perfil/>} /> 
            <Route path="/estadistica" element={<Estadistica/>} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
  </div>;
};

export default AppRouter;
