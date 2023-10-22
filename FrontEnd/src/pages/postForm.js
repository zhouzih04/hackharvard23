import React from 'react';
import logo from '../img/logo.png'
import '../styles/global.css'
import { useNavigate } from "react-router-dom";
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';



function PostForm() {
    const [itemData, setItemData] = useState({});
    const [userData, setUserData] = useState({});
    const [itemName, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [price_range, setPriceRange] = useState(0);
    const [poster_id, setPosterId] = useState(0);
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    fetch('http://localhost:3000/offer', {
        method: 'POST',
        body: JSON.stringify({
            poster_id: {poster_id},
            name: {itemName},
            description: {description},
            price_range: {price_range},
            id: {id},
    }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(function(response){ 
        return response.json()})
    .then(function(data)
        {console.log(data)
    title=document.getElementById("title")
    body=document.getElementById("bd")
    title.innerHTML = data.title
    body.innerHTML = data.body  
}).catch(error => console.error('Error:', error)); 
    return (
        <div className='container' id='formContainer' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <div className='title'>
                <img src={logo} alt='logo' width='124' />
                <h1> Tool Kit</h1>
            </div>
            <div className='title'>
                <h2><u>Submit Request</u></h2>
            </div>

            <form onSubmit={handleSubmit}>
            <div className='form' width='500px' display='flex' flexDirection = 'column' alignItems='center' justifyContent='center' padding='10px'>
                <Box sx={{
                    width: '500px',
                    backgroundColor: '#ffffff',
                    borderRadius: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>
                    <FormControl variant="outlined" onSubmit={submitHandler }>
                    <TextField id="outlined-basic" label="Name" variant="outlined" margin='normal' sx={{width: 400}} onChange={(e) => { 
                    setName(e.target.value); 
                }} />
                    <TextField id="outlined-basic" label="Item Requested" variant="outlined" margin='normal' sx={{width: 400}} onChange={(e) => { 
                    setItemName(e.target.value); 
                }} />
                    <div display='flex' alignItems='space-around'>
                        <p>price range ($$$): </p>
                        <Slider defaultValue={0} step={1} marks min={0} max={3} sx={{width: 400}} />
                    </div>
                    <TextField id="outlined-basic" label="Location" variant="outlined" margin='normal' sx={{width: 400}}/>
                    <TextField id="outlined-basic" label="Description" variant="outlined" multiline="True" rows={5} margin='normal' sx={{width: 400}}/>
                    </FormControl>
                </Box>
                <Button variant="contained" sx={{width: 400}} >Submit</Button>
            </div>
            </form>
        </div>
    );
}        
export default PostForm;