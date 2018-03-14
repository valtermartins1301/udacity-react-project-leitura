import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import styles from '../styles/App';

function App({ classes }) {
  return (
    <div className={classes.app}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <h1> FLUBA </h1>
        </Grid>
      </Grid>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
