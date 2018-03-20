import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';
import { fetchCategories } from '../actions/category';
import styles from '../styles/CreatePostForm';

class CreatePostForm extends Component {
  state = {
    selectedCategory: 'react',
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCategories());
  }

  render() {
    const { selectedCategory } = this.state;
    const { categories, classes } = this.props;
    const SelectProps = {
      MenuProps: {
        className: classes.menu,
      },
    };

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          label="Titulo"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Autor"
          margin="normal"
        />
        <TextField
          select
          label="Categoria"
          className={classes.textField}
          value={selectedCategory}
          SelectProps={SelectProps}
          margin="normal"
        >
          {categories.map(option => (
            <MenuItem key={option.name} value={option.path}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Conteúdo"
          multiline
          rows="4"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          margin="normal"
        />
      </form>
    );
  }
}

CreatePostForm.propTypes = {
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
)(CreatePostForm);
