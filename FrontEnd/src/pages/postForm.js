import React from 'react';
import logo from '../img/logo.png'
import '../styles/global.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { Box, Button } from '@mui/material';



function PostForm() {
    return (
        <div className='container' id='formContainer'>
            <div className='title'>
                <img src={logo} alt='logo' width='124' />
                <h1> Tool Kit</h1>
            </div>
            <div className='title'>
                <h2><u>Submit Request</u></h2>
            </div>
            <Box sx={{
                width: '500px',
                backgroundColor: '#ffffff',
                borderRadius: '1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
            }}>
                <TextField id="outlined-basic" label="Name" variant="outlined" margin='normal' width='480px'/>
                <TextField id="outlined-basic" label="Item Requested" variant="outlined" margin='normal'/>
                <TextField id="outlined-basic" label="Price Range" variant="outlined" margin='normal'/>
                <TextField id="outlined-basic" label="Location" variant="outlined"margin='normal'/>
                <TextField id="outlined-basic" label="Description" variant="outlined" multiline="True" rows={5}  margin='normal'/>
            </Box>
            <div className='container' id='smallerForm'>

            </div>

        </div>
    );
}
export default PostForm;