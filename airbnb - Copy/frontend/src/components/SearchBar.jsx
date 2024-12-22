import React from 'react';
import { TextField, Button, Box } from '@mui/material';

function SearchBar() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
      <TextField label="Search" variant="outlined" sx={{ marginRight: '10px' }} />
      <Button variant="contained" color="primary">Search</Button>
    </Box>
  );
}

export default SearchBar;
