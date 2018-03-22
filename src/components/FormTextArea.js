import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import styles from '../styles/FormTextArea';

const labelProps = {
  shrink: true,
};

function FormTextArea({
  classes, label, defaultValue, key, rows, handleChange,
}) {
  return (
    <TextField
      multiline
      fullWidth
      margin="normal"
      rows={rows}
      label={label}
      InputLabelProps={labelProps}
      className={classes}
      value={defaultValue}
      onChange={() => handleChange(key)}
    />
  );
}

FormTextArea.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  rows: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(FormTextArea);
