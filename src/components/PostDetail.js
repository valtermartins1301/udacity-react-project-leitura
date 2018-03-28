import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import styles from '../styles/PostDetail';

class PostDetail extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    // dispatch();
  }

  render() {
    const { classes, post } = this.props;

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Paper className={classes.paper}>
              <Typography variant="display1" color="inherit">
                {post.title}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

PostDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { post } = state;
  const {
    item,
  } = post || {
    item: {},
  };

  return {
    post: item,
  };
}

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(PostDetail);
