import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';
import Moment from 'react-moment';
import Grid from 'material-ui/Grid';
import styles from '../styles/PostDetail';
import { fetchPost } from '../actions/post';
import CommentList from './CommentList';

class PostDetail extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    const { id } = match.params;

    dispatch(fetchPost(id));
  }

  render() {
    const { classes, post, match } = this.props;
    const { id } = match.params;

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container direction="column" justify="center">
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.category}>
                  {post.category}
                </Typography>
                <Typography variant="headline" className={classes.title}>
                  {post.title}
                </Typography>
                <Typography className={classes.author}>
                  {post.author} - <Moment format="DD/MM/YYYY">{post.timestamp}</Moment>
                </Typography>
                <Typography component="p">
                  {post.body}
                </Typography>
              </CardContent>
            </Card>
            <CommentList postId={id} />
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
  match: PropTypes.object.isRequired,
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
