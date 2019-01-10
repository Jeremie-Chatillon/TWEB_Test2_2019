import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';

import {
  PageTopMovies,
  PageError404,
  PageLogin,
  PageUpcMovies,
} from './components/pages/Pages';

import { AuthContext } from './components/providers/AuthProvider';

const drawerWidth = 400;

const styles = theme => ({
  root: {
    paddingTop: '64px',
  },
  page: {
    paddingTop: 70,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    height: '100%',
  },
});

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(params) => (
    <AuthContext>
      {({ userMail }) => userMail
        ? <Component {...params} />
        : <Redirect to="/login" />}
    </AuthContext>
  )}
  />
)

class App extends React.Component {
  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <Header />
        <div className={classes.page} center="xs">
          <Switch>
            <Route path="/" exact component={PageTopMovies} />
            <Route path="/login" component={PageLogin} />
            <Route path="/upcoming" exact component={PageUpcMovies} />
            <Route path="*" component={PageError404} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
