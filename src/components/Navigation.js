import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import HomeIcon from 'material-ui-icons/Home';
import styles from '../styles/Navigation';

class Navigation extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          textColor="primary"
          centered
        >
          <Tab icon={<HomeIcon />} label="Principal" />
        </Tabs>
      </Paper>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);
