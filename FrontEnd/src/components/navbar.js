import React from 'react';
import logo from '../img/logo.png';
import profilepic from '../img/profile.png';
import { Typography, Button } from '@mui/material';
import ReactDOM from 'react-dom/client';
import Profile from '../pages/Profile';
import Login, {user} from  '../pages/Login';
import { useNavigate } from "react-router-dom";

function Navbar(profile_id) {
    const navigate = useNavigate();
    console.log(profile_id.user_id);
    const ip = profile_id.user_id;
    const redirect = () => {
      navigate('../pages/Profile/id='+ip);
    }
    return (
    <div
      className="flex w-full"
      style={{
        backgroundColor: '#ffffff',
        width: '100%',
        marginBottom: '1rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 'center',
      }}
    >
      <div
        className="flex items-center p-4"
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '200px',
        }}
      >
        <img
          src={logo}
          alt="ToolKit Logo"
          className="w-1/6 h-auto logo"
          width='50px'
          height='50px'
        />
      </div>
      
      <div
        className="right corner"
        style={{
          alignItems: 'center',
          margin: '1rem',
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        
        <div
          className="profile search"
          style={{
            border: '0.5px solid #aeb2b8',
            borderRadius: '500px',
            boxShadow: '1.5px 1.5px 1.5px #aeb2b8',
            alignItems: 'center',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          onClick={redirect}
        >
          <Typography
            sx={{
              fontFamily: 'Kodchasan',
              fontWeight: 'normal',
              color: 'black',
              fontSize: '14px',
              paddingLeft: '0.5rem',
            }}
          > my profile </Typography>
          <img src={profilepic} style={{paddingLeft: '0.5rem'}} onClick={redirect}
           alt="Profile" width='30px' height='30px'/>
        </div>
      </div>
    </div>);

}

export default Navbar;