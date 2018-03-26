import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import { Redirect } from 'react-router-dom';
import CreatePostForm from './CreatePostForm';
import { persistPost } from '../actions/post';
import styles from '../styles/CreatePost';

class CreatePost extends Component {
  state = {
    fireRedirect: false,
  }

  onSave = async (...attributes) => {
    const { dispatch } = this.props;

    await dispatch(persistPost(...attributes));

    this.redirect();
  };

  redirect = () => {
    this.setState({ fireRedirect: true });
  };

  render() {
    const { classes } = this.props;
    const { fireRedirect } = this.state;

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Paper className={classes.paper}>
              <Typography variant="display1" color="inherit">
                Novo Post
              </Typography>
              <CreatePostForm
                onSave={this.onSave}
                onCancel={this.redirect}
              />
              {fireRedirect && (
                <Redirect to="/" />
              )}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

CreatePost.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default compose(
  connect(),
  withStyles(styles),
)(CreatePost);
