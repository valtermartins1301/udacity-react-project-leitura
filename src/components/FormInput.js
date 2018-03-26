import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import styles from '../styles/FormInput';

const labelProps = {
  shrink: true,
};

function FormInput({
  label, value, attr, handleChange,
}) {
  return (
    <TextField
      label={label}
      InputLabelProps={labelProps}
      margin="normal"
      value={value}
      onChange={handleChange(attr)}
      fullWidth
    />
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  attr: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(FormInput);
