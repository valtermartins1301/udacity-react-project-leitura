import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import PostList from './PostList';
import Header from './Header';
import Navigation from './Navigation';
import styles from '../styles/Root';

const Root = ({ store, classes }) => (
  <Provider store={store}>
    <Paper className={classes.root}>
      <Header />
      <Navigation />
      <main className={classes.content}>
        <Router>
          <Route path="/" component={PostList} />
        </Router>
      </main>
    </Paper>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Root);
