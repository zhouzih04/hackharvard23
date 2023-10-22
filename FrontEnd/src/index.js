import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import App from './App';
import Login, {user} from './pages/Login';
import PostForm from './pages/postForm';
import PostOffer from './pages/postOffer';
import PostRequest from './pages/postRequest';
import reportWebVitals from './reportWebVitals';
import Dashboard, {user2} from './pages/Dashboard';
import DM from './pages/DM';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from './pages/Profile';


const root = ReactDOM.createRoot(document.getElementById('root'));

const Index = () => {
  // Define a state variable to store the login status
    const urlParams = new URLSearchParams(window.location.search);
    const view = urlParams.get('view');
    

  const Redirect2 = () => {
      if (view == 0) {
          return(<Profile />);
      } else {
          return(<Dashboard user_id={user2}/>);
      }
  }

  const Redirect = () => {
    if ((user == null || user=='') && (user2 == null || user2=='')) {
      return (<Login />);
    } else {
      return (<Dashboard user_id={user2}/>);
    }
  }
  

  // Fetch the login status (you should replace this with your actual API call)
  // useEffect(() => {
  //   // Simulate fetching the login status, e.g., by making an API call
  //   // Update the isLoggedIn state based on the result
  //   // Replace this with your actual logic for checking the login status
  //   setTimeout(() => {
  //     const fakeLoginStatus = true; // Set to true for demonstration
  //     setIsLoggedIn(fakeLoginStatus);
  //   }, 1000); // Simulating a delay (replace with your API call)
  // }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </React.StrictMode>
  );
};

/**root.render(
  <Index />,
);*/
root.render(
  <Index/>,
  // <PostForm />,
);

