import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/category';
import styles from '../styles/App';
import SortBy from './SortBy';

class PostsByCategory extends Component {
  state = {
    filterBy: 'react',
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCategories());
  }

  onFilterChange = (event, value) => {
    this.setState({ filterBy: value });
  }

  render() {
    const { categories, classes } = this.props;
    const { filterBy } = this.state;
    const mappedCategories = categories.map(category => ({
      key: category.name,
      value: category.path,
    }));

    return (
      <div className={classes.app}>
        <Grid container spacing={24}>
          <SortBy
            label="Ordenar por:"
            options={mappedCategories}
            defaultValue={filterBy}
            handleChange={this.onFilterChange}
          />
        </Grid>
      </div>
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

  const {
    items,
  } = categories || {
    items: [],
  };

  return {
    categories: items,
  };
}

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(PostsByCategory);
