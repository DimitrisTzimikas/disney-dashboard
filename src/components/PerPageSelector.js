import React from 'react';
import {FormControl, InputLabel, Select, MenuItem} from '@mui/material';

const PerPageSelector = ({value, onChange}) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <FormControl variant="outlined" fullWidth={true}>
      <InputLabel>Characters Per Page</InputLabel>
      <Select
        label="Characters Per Page"
        value={value}
        onChange={handleChange}
      >
        {[10, 20, 50, 100, 200, 500].map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PerPageSelector;
