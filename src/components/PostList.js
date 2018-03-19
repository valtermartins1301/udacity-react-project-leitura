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
      <div className={classes.root}>
        <Grid container spacing={24}>
          <SortBy
            label="Ordenar por:"
            options={sortOptions}
            defaultValue={sortBy}
            handleChange={this.onSortChange}
          />
          {sortedItems.map(post => (
            <Grid item xs={4} key={post.id}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
        <FloatActionBtn route="/create-post" />
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
