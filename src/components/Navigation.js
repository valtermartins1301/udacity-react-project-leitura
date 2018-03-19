import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import ViewListIcon from 'material-ui-icons/ViewList';
import SortIcon from 'material-ui-icons/Sort';
import styles from '../styles/Navigation';

function Navigation({ classes }) {
  return (
    <Paper className={classes.root}>
      <Tabs value={false} textColor="primary" centered>
        <Tab
          exact
          activeClassName={classes.active}
          icon={<ViewListIcon />}
          component={NavLink}
          to="/"
          label="Principal"
        />
        <Tab
          activeClassName={classes.active}
          icon={<SortIcon />}
          component={NavLink}
          to="/categories"
          label="Categorias"
        />
      </Tabs>
    </Paper>
  );
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);
