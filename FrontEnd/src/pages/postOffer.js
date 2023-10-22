import React from 'react';
import logo from '../img/logo.png'
import '../styles/global.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import { Box, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  

function PostOffer() {
    return (
        <div className='container' id='formContainer' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <div className='title'>
                <img src={logo} alt='logo' width='124' />
                <h1> Tool Kit</h1>
            </div>
            <div className='title'>
                <h2><u>Submit Request</u></h2>
            </div>
            <div className='form' width='500px' display='flex' flexDirection='column' alignItems='center' justifyContent='center' padding='10px'>
                <Box sx={{
                    width: '500px',
                    backgroundColor: '#ffffff',
                    borderRadius: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    padding: '10px'
                }}>
                    <Button component="label" variant="contained" padding="20px" >
                        Upload IMAGE
                        <VisuallyHiddenInput type="file" />
                    </Button>
                    <TextField id="outlined-basic" label="Name" variant="outlined" margin='normal' sx={{ width: 400 }} />
                    <TextField id="outlined-basic" label="Item Requested" variant="outlined" margin='normal' sx={{ width: 400 }} />
                    <div display='flex' alignItems='space-around'>
                        <p>price range ($$$): </p>
                        <Slider defaultValue={0} step={1} marks min={0} max={3} sx={{ width: 400 }} />
                    </div>
                    <TextField id="outlined-basic" label="Price Range" variant="outlined" margin='normal' sx={{ width: 400 }} />
                    <TextField id="outlined-basic" label="Location" variant="outlined" margin='normal' sx={{ width: 400 }} />
                    <TextField id="outlined-basic" label="Description" variant="outlined" multiline="True" rows={5} margin='normal' sx={{ width: 400 }} />
                </Box>
                <Button variant="contained" sx={{ width: 400 }} >Submit</Button>
            </div>
        </div>
    );
}
function handleFileUpload(e) {

}
export default PostOffer;