import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import CreatePostForm from './CreatePostForm';
import styles from '../styles/CreatePost';

function CreatePost({ classes }) {
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Paper className={classes.paper}>
            <Typography variant="display1" color="inherit">
              Novo Post
            </Typography>
            <CreatePostForm />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

CreatePost.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreatePost);
