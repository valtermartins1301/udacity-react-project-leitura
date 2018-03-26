import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/category';
import styles from '../styles/PostsByCategory';
import SortBy from './SortBy';
import Post from './Post';
import FloatActionBtn from './FloatActionBtn';
import { fetchPostsByCategory } from '../util/api';

class PostsByCategory extends Component {
  state = {
    filterBy: 'react',
    posts: [],
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const { filterBy } = this.state;

    dispatch(fetchCategories());

    return this.filterPostsByCategory(filterBy);
  }

  onFilterChange = (event, value) => {
    this.setState({ filterBy: value });

    return this.filterPostsByCategory(value);
  }

  filterPostsByCategory = async (category) => {
    const posts = await fetchPostsByCategory(category);

    this.setState({ posts });
  }

  render() {
    const { categories, classes } = this.props;
    const { filterBy, posts } = this.state;
    const mappedCategories = categories.map(category => ({
      key: category.name,
      value: category.path,
    }));

    return (
      <Grid container className={classes.root}>
        <Grid item xs={2}>
          <SortBy
            label="Ordenar por:"
            options={mappedCategories}
            defaultValue={filterBy}
            handleChange={this.onFilterChange}
          />
        </Grid>
        <Grid item xs={9}>
          <Grid
            container
            direction="row"
            alignItems="stretch"
            spacing={24}
          >
            {posts.map(post => (
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

PostsByCategory.propTypes = {
  classes: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { categories } = state;

  return {
    categories: categories.items || [],
  };
}

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(PostsByCategory);
