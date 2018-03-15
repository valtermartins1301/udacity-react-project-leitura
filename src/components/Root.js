import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import PostList from './PostList';
import Navigation from './Navigation';
import styles from '../styles/Root';

const Root = ({ store, classes }) => (
  <Provider store={store}>
    <div className={classes.root}>
      <Navigation />
      <main className={classes.content}>
        <Router>
          <Route path="/" component={PostList} />
        </Router>
      </main>
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Root);
