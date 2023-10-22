import React from 'react';
import '../styles/global.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import ListingCard from '../components/ListingCard';
import listings from '../components/listings.json';
import Login, { user } from '../pages/Login';



export default function Profile( ) {
    // const urlParams = new URLSearchParams(window.location.search);
    // const user_id = urlParams.get('id');
    // console.log(user_id);
    const user_id = '102636358572776184433';
    const [ userData, setUserData ] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3000/profile/id=102636358572776184433`)
            .then(res => res.json())
            .then(resJson => setUserData(resJson));
    }, []);
    

    const navigate = useNavigate();

    //should contain user profile info, sales, requests, aggregated ratings
    const redirect = () => {
        navigate('/Login/action=logout');
    }
    const userButton = () => {
        if (user_id == user) {
            return (
                <Button variant='contained' style={{borderRadius: '45px'}} onClick={redirect()}>
                    Log Out
                </Button>
            )
        } else {
            return (
                <Button variant='contained' style={{borderRadius: '45px'}}>
                    Start DM
                </Button>
            )
        }
    }

    // const userOffers = userData.offers.slice(0, 6);
    // const userRequests = userData.requests.slice(0, 6);

    return(
        <Container style={{display: 'flex'}} >
            <div className='userProfile'>
                {/* <img src={userData.profile} width='141px'></img> */}
                <div className='iconColor' width='140px' style={{borderRadius: '70px'}} ></div>
                <h1>{userData.displayName}</h1>
                {userButton}
            </div>
            <div className='listings'>
                <div className='userOffers'>
                    <Box>
                        {userData.offers?.map((listing, index) => (
                            <ListingCard
                                picture_url={listing.picture_url}
                                poser_id={listing.poster_id}
                                location={listing.location}
                                item_name={listing.name}
                                description={listing.description}
                                price_range={listing.price_range}
                            />
                        ))}
                        <Button class='loadMore' variant='contained'>More</Button>
                    </Box>
                </div>
                <div className='userRequests'>
                    <Box>
                        {userData.requests?.map((listing, index) => (
                                <ListingCard
                                    picture_url={listing.picture_url}
                                    poser_id={listing.poster_id}
                                    location={listing.location}
                                    item_name={listing.name}
                                    description={listing.description}
                                    price_range={listing.price_range}
                                />
                            ))}
                        <Button class='loadMore' variant='contained'>More</Button>
                    </Box>
                </div>
            </div>
        </Container>
    );


}
