import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Home from '../components/Home';
import { Login } from '../components/Login';
import Questions from '../components/Questions';

const AppRouter = () => {
  return <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/questions/:id" element={<Questions/>} />
            <Route path="/Login" element={<Login/>} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
  </div>;
};

export default AppRouter;
