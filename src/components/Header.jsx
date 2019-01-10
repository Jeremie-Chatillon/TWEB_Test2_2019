import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { AuthContext } from './providers/AuthProvider';

const styles = {
  root: {
    flexGrow: 1,
    position: 'fixed',
    weight: '100%',
    height: '64px',
    top: 0,
    shadow: 'none',
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -7,
    marginRight: 20,
    paddingTop: 4,
    height: '60px',
    outline: 'none',
  },
  LinkButton: {
    textDecoration: 'none',
    color: 'secondary',
  }
};

function MenuAppBar(props) {
  const { classes } = props;

  const menuLarge = (
    <>
      <Link to="/" className={classes.LinkButton} readOnly tabIndex="-1"><Button id="accueilButton">Top Movies</Button></Link>
      <Link to="/upcoming" className={classes.LinkButton} readOnly tabIndex="-1"><Button id="mapButton">upComing Movies</Button></Link>
      <AuthContext>
        {({ userMail, signOut }) => {
          const onClick = (event) => {
            event.preventDefault();
            signOut();
          };


          return (
            <>
              {userMail ? (
                <Button id="logoutButon" onClick={onClick} type="button">logOut</Button>
              ) : (
                <Link to="/login" className={classes.LinkButton} readOnly tabIndex="-1"><Button id="aboutButton">login</Button></Link>
              )}
            </>
          )
        }}
      </AuthContext>
    </>
  );

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <div className={classes.grow} />
          {menuLarge}
        </Toolbar>
      </AppBar>
    </div>
  );
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
