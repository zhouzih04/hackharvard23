import '../styles/dashboard.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Login, {user} from  '../pages/Login';

import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ListingCard from '../components/ListingCard';
import listings from '../components/listings.json';
import Navbar from '../components/navbar';

import ItemCard from '../components/ItemCard';

let userId = ''; 

function Dashboard(user_id) {
    const [listData, setListData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/home/offers`)
            .then(res => res.json())
            .then(resJson => setListData(resJson));
    }, []);

    const [selectedItemId, setSelectedItemId] = useState(null);
    if(user_id != null && user_id != '') {
        userId = user_id;
    }
    // console.log(user_id.user_id);
    // if (user_id == null) {
    //   return(<Login />);
    // }

    console.log(listData);
  return (
    <div className="r">
      {selectedItemId && < ItemCard itemId={selectedItemId} type ='offer' handleClose={() => setSelectedItemId(null)} />}
      <Navbar user_id = {user_id.user_id}/>
      <Box sx={{ padding: '0 80px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
        </Box>
        <Box
          sx={{
            marginTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          {listData.map((listing, index) => (
            <Link onClick={() => setSelectedItemId(listing.id)}>
                <ListingCard
                picture_url={listing.picture_url}
                location={listing.location}
                description={listing.description}
                price_range={listing.price_range}
                id={listing.id}
                item_name={listing.name}
                poster_id={listing.poster_id}
                />
            </Link>
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default Dashboard;
export const user2 = userId;
