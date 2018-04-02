import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Comment from './Comment';
import { fetchComments } from '../actions/comment';
import styles from '../styles/CommentList';

class CommentList extends Component {
  componentDidMount() {
    const { dispatch, postId } = this.props;

    dispatch(fetchComments(postId));
  }

  render() {
    const { classes, comments } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          {comments.map(comment => (
            <Comment comment={comment} />
          ))}
        </div>
      </div>
    );
  }
}

CommentList.propTypes = {
  postId: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  const { comments } = state;
  const {
    items,
  } = comments || {
    items: [],
  };

  return {
    comments: items,
  };
}

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(CommentList);
