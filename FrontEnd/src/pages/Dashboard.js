import '../styles/dashboard.css';
import React from 'react';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
//import Header from './header';
import ListingCard from '../components/ListingCard';
import listings from '../components/listings.json';

function Dashboard() {
  return (
    <div className="r">
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
