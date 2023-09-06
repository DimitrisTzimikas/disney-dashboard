import React, {useState} from 'react';
import {TextField, Box} from '@mui/material';

const CharacterSearch = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <Box>
      <TextField
        label="Search Characters"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        fullWidth
      />
    </Box>
  );
};

export default CharacterSearch;
