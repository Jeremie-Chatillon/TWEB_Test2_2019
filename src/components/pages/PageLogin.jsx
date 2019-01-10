import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';

import { withStyles } from '@material-ui/core';

import { AuthContext } from '../providers/AuthProvider';
import CenteredPaper from '../items/CenteredPaper';

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  LinkButton: {
    textDecoration: 'none',
    color: 'inherit'
  },
});

class PageLogin extends React.Component {

  constructor(props) {
    super(props);
    document.title = 'Connexion'; // changement du titre de la page

    this.state = {
      userMail: '',
      password: '',
    };
  }

  handleChange = prop => (event) => {
    this.setState({ [prop]: event.target.value });
  }

  render() {
    const { classes, onClick2 } = this.props;
    return (
      <AuthContext>
        {({ error, signIn, userMail }) => {
          const onSubmit = (event) => {
            event.preventDefault();
            const { userMail, password } = this.state;
            signIn(userMail, password);
          };


          return (
            <>
              {userMail ? (
                <CenteredPaper className={classes.paper}>
                  <Typography variant="h3" color="secondary">Welcome {userMail}</Typography>
                </CenteredPaper>
              ) : (
                <>
                  <CssBaseline />
                  <main className={classes.layout}>
                    <Paper className={classes.paper}>
                      <Avatar className={classes.avatar}>
                        <LockIcon color="secondary" />
                      </Avatar>
                      <Typography component="h1" variant="h5">
                        {'Connexion'}
                      </Typography>
                      <form className={classes.form} onSubmit={onSubmit}>
                        <FormControl
                          margin="normal"
                          required
                          fullWidth
                          onChange={this.handleChange('userMail')}
                        >
                          <InputLabel htmlFor="email">Adresse mail</InputLabel>
                          <Input id="email" name="email" autoComplete="email" autoFocus />
                        </FormControl>
                        <FormControl
                          margin="normal"
                          required
                          fullWidth
                          onChange={this.handleChange('password')}
                        >
                          <InputLabel htmlFor="password">Mot de passe</InputLabel>
                          <Input
                            name="password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                          />
                        </FormControl>
                        {error
                          && (
                            <Typography color="error">
                              {error}
                            </Typography>
                          )
                        }


                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                        >
                          {'Se connecter'}
                        </Button>
                        <Button
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                          onClick={onClick2}
                        >
                          {'Créer un nouveau compte'}
                        </Button>
                      </form>
                    </Paper>
                  </main>
                </>
              )}
            </>
          );
        }}
      </AuthContext>
    );
  }
}

PageLogin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PageLogin);