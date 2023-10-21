import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import App from './App';
import { Login, userId, setUserId } from '/Login';
import reportWebVitals from './reportWebVitals';
import Dashboard from './pages/Dashboard';


const root = ReactDOM.createRoot(document.getElementById('root'));


const Index = () => {
  // Define a state variable to store the login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const user = useSelector(state => state.user);
  const Redirect = () => {
    if (userId) {
      return (<Dashboard />);
    } else {
      return (<Login />);
    }
  }
  

  // Fetch the login status (you should replace this with your actual API call)
  useEffect(() => {
    // Simulate fetching the login status, e.g., by making an API call
    // Update the isLoggedIn state based on the result
    // Replace this with your actual logic for checking the login status
    setTimeout(() => {
      const fakeLoginStatus = true; // Set to true for demonstration
      setIsLoggedIn(fakeLoginStatus);
    }, 1000); // Simulating a delay (replace with your API call)
  }, []);

  return (
    <React.StrictMode>
      {Redirect}
    </React.StrictMode>
  );
};

root.render(
  <Index />,
);
