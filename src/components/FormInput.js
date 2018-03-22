import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import styles from '../styles/FormInput';

const labelProps = {
  shrink: true,
};

function FormInput({
  classes, label, value, key, handleChange,
}) {
  return (
    <TextField
      label={label}
      InputLabelProps={labelProps}
      margin="normal"
      className={classes}
      value={value}
      onChange={() => handleChange(key)}
      fullWidth
    />
  );
}

FormInput.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(FormInput);
