import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/post';
import styles from '../styles/App';
import Post from './Post';

class Posts extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPosts());
  }

  render() {
    const { items, classes } = this.props;
    const sortedItems = items.sort((a, b) => a.voteScore < b.voteScore);

    return (
      <div className={classes.app}>
        <Grid container spacing={24}>
          {sortedItems.map(post => (
            <Grid item xs={4} key={post.id}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

Posts.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { posts } = state;

  const {
    items,
  } = posts || {
    items: [],
  };

  return {
    items,
  };
}

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(Posts);
