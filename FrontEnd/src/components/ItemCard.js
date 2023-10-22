import { useEffect, useState } from 'react';
import React from 'react';
import { Box, Button, ButtonGroup, Modal } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function ItemCard( { itemId, type, handleClose }) {
    console.log('hi');
    const [itemData, setItemData] = useState({});
    const [userData, setUserData] = useState({});

    const navigate = useNavigate();
    useEffect(() => {
            if (type=='offer') {
                fetch(`http://localhost:3000/offer/${itemId}`)
                .then(res => res.json())
                .then(resJson => {
                    console.log(resJson);
                    setItemData(resJson);
                    fetch(`http://localhost:3000/profile/${resJson.poster_id}`)
                        .then(res => res.json())
                        .then(resJson => {
                            setUserData(resJson);
                        })
            
            });
            } else {
                fetch(`http://localhost:3000/request/${itemId}`)
                .then(res => res.json())
                .then(resJson => {
                    setItemData(resJson);
                    fetch(`http://localhost:3000/profile/${resJson.poster_id}`)
                        .then(res => res.json())
                        .then(resJson => {
                            setUserData(resJson);
                        })
            
                });
            }
            
        }, [itemId]);
    
        let price = '';
        if (itemData.price_range == 0) {
            price = 'Free';
        } else if (itemData.price_range == 1) {
            price = '$';
        } else if (itemData.price_range == 2) {
            price = '$$';
        } else {
            price = '$$$';
        }
    

    return(
        <Modal
        open={true}
        onClose={handleClose}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80%', width: '50%', margin: 'auto'}}
        >
            <Box
                style={{background: 'white', borderRadius: '16px', border: '2px solid #000', width: 800, 
                justifyContent: 'center', padding: '20px', textAlign: 'center'}}>
                <img src={itemData.picture_url} width='360'
                    style={{ borderRadius: '30px', width: '50%', margin: 'auto'}}
                ></img>
                <div className='contentWrapper' style={{display: 'flex', justifyContent:'center'}}>
                    <div className='itemInfo' style={{justifyContent: 'center'}}>
                        <h1>{itemData.name} {price}</h1> 
                        <p>{itemData.description}</p>
                    </div>
                    {/* <div className='priceInfo' style={{display: 'flex', marginTop:'60px'}}>
                        <h2>{price}</h2>
                    </div> */}
                </div>
                <div className='posterInfo' style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}> 
                    <div classname='nameLocation' style={{textAlign: 'left'}}>
                        <p>User: {userData.displayName}</p>
                        <p>Location: {itemData.location}</p>
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
