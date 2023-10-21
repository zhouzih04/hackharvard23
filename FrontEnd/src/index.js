import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import Login from './pages/Login';
import reportWebVitals from './reportWebVitals';

//logic: if logged in redirect to dashboard, else redirect to login
//need to fetch login status here and use a UseState component to return diff pages

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);


