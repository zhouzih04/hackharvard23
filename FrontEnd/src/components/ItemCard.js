import { useEffect, useState } from 'react';
import React from 'react';
import { Box, Button, ButtonGroup, Modal } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function ItemCard( { itemId, type, handleClose }) {
    const [itemData, setItemData] = useState({});
    const [userData, setUserData] = useState({});

    const navigate = useNavigate();
    useEffect(() => {
            if (type=='offer') {
                fetch(`https://localhost:3000/offer/${itemId}`)
                .then(res => res.json())
                .then(resJson => {
                    setItemData(resJson);
                    fetch(`https://localhost:3000/profile/${resJson.poster_id}`)
                        .then(res => res.json())
                        .then(resJson => {
                            setUserData(resJson);
                        })
            
            });
            } else {
                fetch(`https://localhost:3000/request/${itemId}`)
                .then(res => res.json())
                .then(resJson => {
                    setItemData(resJson);
                    fetch(`https://localhost:3000/profile/${resJson.poster_id}`)
                        .then(res => res.json())
                        .then(resJson => {
                            setUserData(resJson);
                        })
            
                });
            }
            
        }, [itemId]);
    

    

    return(
        <Modal
        open={true}
        onClose={handleClose}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
        >
            <Box
                sx={{background: 'white', borderRadius: '16px', border: '2px solid #000', width: 800 }}>
                <img src={itemData.picture_url} width='360'
                    sx={{ borderRadius: '30px'}}
                ></img>
                <div className='contentWrapper' sx={{display: 'flex'}}>
                    <div className='itemInfo'>
                        <h1>{itemData.name}</h1>
                        <p>{itemData.description}</p>
                    </div>
                    <div className='priceInfo'>
                        <p>{userData.displayName} offers at: </p>
                        <h1>{itemData.price_range}</h1>
                    </div>
                </div>
                <div className='posterInfo' sx={{display: 'flex'}}> 
                    <div classname='nameLocation'>
                        <p>{userData.displayName}</p>
                        <p>{itemData.location}</p>
                    </div>
                    <div className='dmButton'>
                        <Button variant='contained' sx={{borderRadius: 'flex'}}>
                            Start DM
                        </Button>
                    </div>
                </div>
                
                

            </Box>
        </Modal>
    );
}
