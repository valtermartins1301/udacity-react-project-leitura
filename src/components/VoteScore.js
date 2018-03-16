import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import FavoriteIcon from 'material-ui-icons/Favorite';
import styles from '../styles/VoteScore';

const VoteScore = ({ classes, score }) => (
  <IconButton>
    <Badge badgeContent={score} className={classes.margin} color="secondary">
      <FavoriteIcon className={classes.padding} />
    </Badge>
  </IconButton>
);

VoteScore.propTypes = {
  classes: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired,
};

export default withStyles(styles)(VoteScore);
