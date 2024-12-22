import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import Header from '../components/Header';

function PropertyPage() {
  const { id } = useParams();
  // For demo purposes, assuming a property exists with the given ID
  const property = {
    title: 'Beachfront Villa',
    description: 'A beautiful villa by the beach.',
    price: '$250/night',
    image: 'image_url'
  };

  return (
    <div>
      <Header />
      <Container>
        <Box sx={{ textAlign: 'center', margin: '20px 0' }}>
          <Typography variant="h3">{property.title}</Typography>
          <Typography variant="h5">{property.price}</Typography>
          <img src={property.image} alt={property.title} style={{ width: '100%' }} />
          <Typography variant="body1" sx={{ marginTop: '20px' }}>
            {property.description}
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default PropertyPage;
