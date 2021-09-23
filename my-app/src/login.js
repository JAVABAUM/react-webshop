import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login/login';
import Topbar from './components/topbar/topbar';
import './components/login/auth';

ReactDOM.render(
  <React.StrictMode>
    <Topbar />    
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);

