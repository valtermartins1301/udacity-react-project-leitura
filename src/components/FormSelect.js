import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import styles from '../styles/FormSelect';

const selectProps = ({ menu }) => ({
  MenuProps: {
    className: menu,
  },
});

function FormSelect({
  classes, label, value, attr, options, handleChange,
}) {
  return (
    <TextField
      select
      label={label}
      value={value}
      fullWidth
      SelectProps={selectProps(classes)}
      onChange={handleChange(attr)}
      margin="normal"
    >
      {options.map(option => (
        <MenuItem key={option.name} attr={option.name} value={option.path}>
          {option.name}
        </MenuItem>
      ))}
    </TextField>

  );
}

FormSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  attr: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(FormSelect);
