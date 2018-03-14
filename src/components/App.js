import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

const styles = () => ({
  app: {
    textAlign: 'center',
  },
});

function App() {
  return (
    <div classes="app">
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <h1> FLUBA </h1>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(App);
