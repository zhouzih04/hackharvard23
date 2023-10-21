import './dashboard.css';
import React from 'react';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
//import Header from './header';
import ListingCard from './components/ListingCard';
import listings from './components/listings.json';

function Dashboard() {
  return (
    <div className="r">
      <Header />
      <Box sx={{ padding: '0 80px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            type="button"
            style={{
              backgroundColor: 'transparent',
              cursor: 'pointer',
              border: '1px solid #DDDDDD',
              borderRadius: '.75rem',
              margin: 0,
              padding: '.75rem 1rem',
              maxHeight: '3rem',
              textTransform: 'none',
              color: 'black',
            }}
            onClick={() => console.log('Filtering')}
          >
            Filters
          </Button>
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
              imagePath={`${process.env.PUBLIC_URL}/images/image${
                index + 1
              }.jpeg`}
            />
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default Dashboard;
