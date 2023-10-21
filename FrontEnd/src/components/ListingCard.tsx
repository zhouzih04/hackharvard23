import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';

type ListingCardProps = {
  /** will prob only have one user per listing, whether offerer or offeree*/
  item: string;
  item_description: string;
  item_tags: string; //split comma spaced tags? talk to database
  item_price: number;
  user: string;
  user_rating: number;
  user_location: string;
  imagePath: string;
};
function ListingCard({
  item,
  item_description,
  item_tags,
  item_price,
  user,
  user_rating,
  user_location,
  imagePath,
}: ListingCardProps) {
  return (
    <Card sx={{ flexBasis: '23%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={imagePath}
          alt={user_location}
        />
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: 600, fontSize: '1rem' }}
            >
              {user_location}
          </Typography>
            <Typography>{user_rating}</Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {item_description}
          </Typography>
          <Typography>
            <strong>${item_price}</strong> night
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default ListingCard;
