import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import styles from '../styles/FormTextArea';

const labelProps = {
  shrink: true,
};

function FormTextArea({
  label, value, attr, rows, handleChange,
}) {
  return (
    <TextField
      multiline
      fullWidth
      margin="normal"
      rows={rows}
      label={label}
      InputLabelProps={labelProps}
      value={value}
      onChange={handleChange(attr)}
    />
  );
}

FormTextArea.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  attr: PropTypes.string.isRequired,
  rows: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(FormTextArea);
