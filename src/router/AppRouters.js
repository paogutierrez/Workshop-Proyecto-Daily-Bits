import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Estadistica from '../components/Estadistica';
import Footer from '../components/Footer';

const AppRouter = () => {
  return <div>
      <BrowserRouter>
      <h1>Prueba</h1>
        <Routes>
            {/* <Route path="/" element={}/> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
  </div>;
};

export default AppRouter;