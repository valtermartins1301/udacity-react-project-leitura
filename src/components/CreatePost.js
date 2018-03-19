import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import styles from '../styles/CreatePost';

function CreatePost({ classes }) {
  return (
    <form className={classes.root}>
      <Typography variant="title" color="inherit">
        Novo Post
      </Typography>
      <TextField
        label="Titulo"
        className={classes.textField}
        margin="normal"
      />
    </form>
  );
}

CreatePost.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreatePost);
