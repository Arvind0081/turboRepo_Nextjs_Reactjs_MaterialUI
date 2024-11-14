import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

// Customizable Button component using Material UI's Button
const CustomButton = ({ label, onClick, color, variant }) => {
  return (
    <Button variant={variant || 'contained'} color={color || 'primary'} onClick={onClick}>
      {label}
    </Button>
  );
};

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning']),
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
};

export default CustomButton;