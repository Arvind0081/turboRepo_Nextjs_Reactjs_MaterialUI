import React from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

// Customizable Input component using Material UI's TextField
const CustomInput = ({ label, value, onChange, type }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      type={type || 'text'}
      fullWidth
    />
  );
};

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default CustomInput;