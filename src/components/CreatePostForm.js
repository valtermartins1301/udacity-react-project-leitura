import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormTextArea from './FormTextArea';
import { fetchCategories } from '../actions/category';
import styles from '../styles/CreatePostForm';

class CreatePostForm extends Component {
  state = {
    category: 'react',
    body: '',
    title: '',
    author: '',
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCategories());
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  save = async () => {
    const { onSave } = this.props;
    const {
      category, body, title, author,
    } = this.state;

    return onSave({
      category, body, title, author,
    });
  };

  cancel = () => {
    const { onCancel } = this.props;

    return onCancel();
  };

  render() {
    const {
      category, title, author, body,
    } = this.state;
    const { categories, classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <FormInput
          value={title}
          attr="title"
          label="Titulo"
          handleChange={this.handleChange}
        />
        <FormInput
          value={author}
          attr="author"
          label="Autor"
          handleChange={this.handleChange}
        />
        <FormSelect
          value={category}
          options={categories}
          attr="category"
          label="Categoria"
          className={classes.textField}
          handleChange={this.handleChange}
        />
        <FormTextArea
          attr="body"
          label="Conteúdo"
          rows="4"
          value={body}
          className={classes.textField}
          handleChange={this.handleChange}
        />

        <div className={classes.actions}>
          <Button
            onClick={this.cancel}
            variant="raised"
            color="secondary"
            className={classes.button}
          >
            Cancelar
          </Button>
          <Button
            onClick={this.save}
            variant="raised"
            color="primary"
            className={classes.button}
          >
            Salvar
          </Button>
        </div>
      </form>
    );
  }
}

CreatePostForm.propTypes = {
  classes: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
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
