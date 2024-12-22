import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import PropertyCard from '../components/PropertyCard';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';

const properties = [
  { id: 1, title: 'Beachfront Villa', price: '$250/night', image: 'image_url' },
  { id: 2, title: 'Cozy Cottage', price: '$150/night', image: 'image_url' },
  { id: 3, title: 'Luxury Penthouse', price: '$500/night', image: 'image_url' }
];

function HomePage() {
  return (
    <div>
      <Header />
      <Box sx={{ textAlign: 'center', margin: '20px 0' }}>
        <Typography variant="h3">Find your next getaway</Typography>
      </Box>
      <SearchBar />
      <Container>
        <Grid container spacing={3}>
          {properties.map((property) => (
            <Grid item xs={12} sm={6} md={4} key={property.id}>
              <PropertyCard property={property} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default HomePage;
