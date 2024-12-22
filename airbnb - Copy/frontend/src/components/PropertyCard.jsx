import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

function PropertyCard({ property }) {
  return (
    <Card>
      <CardActionArea component={Link} to={`/property/${property.id}`}>
        <CardMedia
          component="img"
          height="140"
          image={property.image}
          alt={property.title}
        />
        <CardContent>
          <Typography variant="h6">{property.title}</Typography>
          <Typography variant="body2" color="textSecondary">{property.price}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PropertyCard;
