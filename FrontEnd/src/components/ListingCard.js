import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';

export default function ListingCard({picture_url,
    poster_id,
    location,
    item_name,
    description,
    price_range}) {
        let price = '';
        if (price_range == 0) {
            price = 'Free';
        } else if (price_range == 1) {
            price = '$';
        } else if (price_range == 2) {
            price = '$$';
        } else {
            price = '$$$';
        }
        return (
            <Card sx={{ flexBasis: '23%', 
            borderRadius: '1rem',
            paddingBottom: '0.5rem'}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={picture_url}
                  alt={location}
                />
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: 600, fontSize: '1rem' }}
                    >  
                     <p>{item_name}</p>
                      <p>{location}</p>
                  </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                  <Typography>
                    <strong>{price}</strong> / day
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
    }