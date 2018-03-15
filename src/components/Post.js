import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import VoteScore from './VoteScore';

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  category: {
    marginBottom: 16,
    fontSize: 12,
    color: theme.palette.text.secondary,
  },
  title: {
    minHeight: 45,
  },
  author: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});

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
            {post.author}
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
