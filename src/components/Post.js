import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Moment from 'react-moment';
import VoteScore from './VoteScore';
import styles from '../styles/Post';

function Post({ classes, post }) {
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.category}>
            {post.category}
          </Typography>
          <Typography variant="headline" component="h2" className={classes.title}>
            {post.title}
          </Typography>
          <Typography className={classes.author}>
            {post.author} - <Moment format="DD/MM/YYYY">{post.timestamp}</Moment>
          </Typography>
          <Typography component="p">
            {post.body}
          </Typography>
        </CardContent>
        <CardActions>
          <VoteScore score={post.voteScore} />
        </CardActions>
      </Card>
    </div>
  );
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);
