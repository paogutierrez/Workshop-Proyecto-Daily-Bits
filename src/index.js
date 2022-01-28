import React from 'react';
import ReactDOM from 'react-dom';
import { Login } from './components/Login';
import './index.css';
import AppRouter from './routes/AppRouter';



ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);


