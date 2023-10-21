import React from 'react';
import logo from '../img/logo.png'
import '../styles/global.css'
import GoogleButton from 'react-google-button'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const userId = '';

function Login() {
    // function setCurrentUserId(id) {
    //     const UPDATE_USER = 'UPDATE_USER';
    //     const addUser = (id) =>  {
    //         return {
    //             type: UPDATE_USER,
    //             id,
    //         }
    //     }
    // }
    const [userId, setUserId] = useState('');
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

                {/* figure out this shit later THIS IS THE FANCY GOOGLE SIGNIN BUTTON*/}
                {/* WE LIKE FANCY STUFF */}
                <div id='googleButton' className="container">
                    <div class="jumbotron text-center text-primary">
                        <a href="https://localhost:3000/auth/google" class="btn btn-danger"><span class="fa fa-google"></span> SignIn with Google</a>
                    </div>
                </div>
                </div>
    
    );
}


export default Login;
export const user = userId;