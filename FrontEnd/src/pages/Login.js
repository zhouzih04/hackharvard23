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
                <div style={{textAlign: 'center'}}>
                    <div className='title'>
                        <img src={logo} alt='logo' width='112'/>
                        <h1 style={{fontSize: '58px', margin: '30px'}}> SustainaSwap</h1>
                    </div>
                    <div className='description' style={{margin: '60px'}}>
                        <p>Some people have too many tools, some people have none.</p>
                        <p>Would you SustainaSwap with me?</p>
                    </div>

                    <div id='googleButton' className="container" 
                            style={{

                                borderRadius: '35px',
                                backgroundColor: '#445C78',
                                width: '300px',
                                height: '25px',
                                borderRadius: '80px',
                                verticalAlign: 'middle',
                                padding: '20px',
                            }}>
                        <div className="jumbotron text-center text-primary" style={{display: 'flex', alignItems: 'end', justifyContent: 'center'}}>
                            <a href="http://localhost:3000/auth/google" className="btn btn-danger"
                            style={{color: 'E6E9E3'}}> SignIn with Google</a>
                        </div>
                    </div>
                </div>
            </div>
        
    
    );
}


export default Login;
export const user = userId;