import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import PersonIcon from 'material-ui-icons/Person';
import styles from '../styles/Comment';

function Comment({ classes, comment }) {
  return (
    <Paper className={classes.paper}>
      <Grid container wrap="nowrap">
        <Grid item>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </Grid>
        <Grid item xs>
          <Typography>
            {comment.body}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

Comment.propTypes = {
  classes: PropTypes.object.isRequired,
  comment: PropTypes.object.isRequired,
};

export default withStyles(styles)(Comment);
