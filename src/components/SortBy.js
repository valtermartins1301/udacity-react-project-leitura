import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';
import styles from '../styles/SortBy';

const SortBy = ({
  classes, label, options, defaultValue, handleChange,
}) => (
  <div className={classes.root}>
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        aria-label={label}
        className={classes.group}
        value={defaultValue}
        onChange={handleChange}
      >
        {options.map(option => (
          <FormControlLabel
            key={option.key}
            value={option.key}
            control={<Radio />}
            label={option.value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  </div>
);

SortBy.propTypes = {
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SortBy);
