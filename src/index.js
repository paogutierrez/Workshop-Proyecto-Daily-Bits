import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import AppRouter from './router/AppRouters'


ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <AppRouter /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
