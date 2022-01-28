import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Questions from '../components/Questions';

const AppRouter = () => {
  return <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/questions/:id" element={<Questions/>} />
        </Routes>
      </BrowserRouter>
  </div>;
};

export default AppRouter;