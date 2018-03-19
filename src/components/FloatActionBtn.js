import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { Link } from 'react-router-dom';
import styles from '../styles/FloatActionBtn';

function FloatActionBtn({ classes, route }) {
  return (
    <div className={classes.root}>
      <Button
        className={classes.fab}
        variant="fab"
        color="secondary"
        component={Link}
        to={route}
      >
        <AddIcon />
      </Button>
    </div>
  );
}

FloatActionBtn.propTypes = {
  classes: PropTypes.object.isRequired,
  route: PropTypes.string.isRequired,
};

export default withStyles(styles)(FloatActionBtn);
