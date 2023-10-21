import '../styles/dashboard.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';

import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
//import Header from './header';
import ListingCard from '../components/ListingCard';
import listings from '../components/listings.json';

import itemCard from '../components/itemCard';


function Dashboard() {
    const [itemData, setItemData] = useState([{}]);

    const [selectedItemId, setSelectedItemId] = useState(null);

  return (
    <div className="r">
      {slectedSongId && < ItemCard itemId={selectedItemId} handleClose={() => setSelectedSongId(null)} />}
      <Box sx={{ padding: '0 80px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          
        </Box>
        <Box
          sx={{
            marginTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '.5rem',
          }}
        >
          {listings.map((listing, index) => (
            <ListingCard
              location={listing.location}
              description={listing.description}
              price_range={listing.price_range}
              id={listing.id}
              name={listing.name}
              poster_id={listing.poster_id}
              /*imagePath={`${process.env.PUBLIC_URL}/images/image${
                index + 1
              }.jpeg`}*/
            />
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default Dashboard;
