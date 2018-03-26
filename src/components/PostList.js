import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/post';
import styles from '../styles/PostList';
import Post from './Post';
import SortBy from './SortBy';
import FloatActionBtn from './FloatActionBtn';

class Posts extends Component {
  state = {
    sortBy: 'voteScore',
    sortOptions: [{
      key: 'voteScore',
      value: 'Votos',
    }, {
      key: 'timestamp',
      value: 'Data de criação',
    }],
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPosts());
  }

  onSortChange = (event, value) => {
    this.setState({ sortBy: value });
  }

  render() {
    const { items, classes } = this.props;
    const { sortBy, sortOptions } = this.state;
    const sortedItems = items.sort((a, b) => a[sortBy] < b[sortBy]);

    return (
      <Grid container className={classes.root}>
        <Grid item xs={2}>
          <SortBy
            label="Ordenar por:"
            options={sortOptions}
            defaultValue={sortBy}
            handleChange={this.onSortChange}
          />
        </Grid>
        <Grid item xs={9}>
          <Grid
            container
            direction="row"
            alignItems="stretch"
            spacing={24}
          >
            {sortedItems.map(post => (
              <Grid item xs={4} key={post.id}>
                <Post post={post} />
              </Grid>
          ))}
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <FloatActionBtn route="/create-post" />
        </Grid>
      </Grid>
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
