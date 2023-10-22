import React from 'react';
import logo from '../img/logo.png'
import '../styles/global.css'
// import GoogleButton from 'react-google-button'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import { Router } from 'react-router-dom';
import DashBoard from './Dashboard';

const userId = '';

function Login() {

    // const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');
    const action = urlParams.get('action');
    if (action =='logout') {
        userId = null;
    } else if (userId != null && userId!='') {
        return(<DashBoard user_id={userId}/>);
    }
    // setUserId(0);
    // const url = new URL(window.location.href); 
    // if (url.searchParams.has('id')) {
    //     // setUserId(url.searchParams.get('id'));
    //     console.log('hi');
    //     // navigate('../pages/Dashboard');
    // }

    // setUserId(searchParams.get("id"));
    // function setCurrentUserId(id) {
    //     const UPDATE_USER = 'UPDATE_USER';
    //     const addUser = (id) =>  {
    //         return {
    //             type: UPDATE_USER,
    //             id,
    //         }
    //     }
    // }
    // const navigate = useNavigate();
    // const updateRedirect = () => {
        
    //      navigate('../pages/Dashboard');
    // }
    
    return (
            <div className='container' id='loginContainer'>
            <script src="https://apis.google.com/js/platform.js" async defer></script>
            <meta name="google-signin-client_id" content="286256665198-fvg7eai9vokvqi0tn0fkc5003ea83car.apps.googleusercontent.com">

            </meta>
            <div className='title'>
                <img src={logo} alt='logo' width='124'/>
                <h1> Tool Kit</h1>
            </div>
            <div className='description'>
                <p>We should have a slogan here.</p>
                <p>Line 2 of slogan lol.</p>
            </div>

            <div id='googleButton' className="container">
                <div className="jumbotron text-center text-primary">
                    <a href="http://localhost:3000/auth/google" className="btn btn-danger"><span className="fa fa-google"></span> SignIn with Google</a>
                </div>
            </div>
            </div>
        
    
    );
}


export default Login;
export const user = userId;