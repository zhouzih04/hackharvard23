import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Container, Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Login, userId, setUserId } from './pages/Login';
import ListingCard from './components/ListingCard';
import listings from './components/listings.json';



export default function Profile( user_id ) {
    // const { user_id } = useParams();
    const [ userData, setUserData ] = useState({});
    useEffect(() => {
        fetch('user server address')
            .then(res => res.json())
            .then(resJson => setUserData(resJson));
    }, [user_id]);

    //should contain user profile info, sales, requests, aggregated ratings
    const redirect = () => {
        setUserId(null);
        navigate('/Login');
    }
    const userButton = () => {
        if (user_id == userId) {
            return (
                <Button variant='contained' sx={{borderRadius: '45px'}} onClick={redirect()}>
                    Log Out
                </Button>
            )
        } else {
            return (
                <Button variant='contained' sx={{borderRadius: '45px'}}>
                    Start DM
                </Button>
            )
        }
    }

    

    const userOffers = userData.offers.slice(0, 6);
    const userRequests = userData.requests.slice(0, 6);

    return(
        <Container sx={{display: 'flex'}} >
            <div className='userProfile'>
                {/* <img src={userData.profile} width='141px'></img> */}
                <div className='iconColor' width='140px' sx={{borderRadius: '70px'}} ></div>
                <h1>{userData.displayName}</h1>
                {userButton}
            </div>
            <div className='listings'>
                <div className='userOffers'>
                    <Box>
                        {userOffers.map((listing, index) => (
                            <ListingCard
                                picture_url={listing.picture_url}
                                poser_id={listing.poster_id}
                                location={listing.location}
                                name={listing.name}
                                description={listing.description}
                                price_range={listing.price_range}
                            />
                        ))}
                        <Button class='loadMore' variant='contained'>More</Button>
                    </Box>
                </div>
                <div className='userRequests'>
                    <Box>
                        {userRequests.map((listing, index) => (
                                <ListingCard
                                    picture_url={listing.picture_url}
                                    poser_id={listing.poster_id}
                                    location={listing.location}
                                    name={listing.name}
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