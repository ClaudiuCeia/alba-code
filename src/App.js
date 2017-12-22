import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';

import {
  Link,
} from 'react-router-dom';

const styles = theme => ({
    root: {
      width: '100%',
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    buttonOutline: {
      border: '1px solid rgba(255, 255, 255, .5)',
      margin: theme.spacing.unit,
      fontWeight: 'normal',
    },
    content: {
      maxWidth: '100%',
      flex: 1,
      backgroundColor: theme.palette.background.default,
      paddingBottom: theme.spacing.unit * 3,
    },
    footer: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
      paddingTop: theme.spacing.unit,
    },
    leftIcon: {
      marginRight: theme.spacing.unit,
    },
    logoLink: {
      color: '#fff',
      textDecoration: 'none',
      display: 'inline-flex',
      flex: 1,
    },
    profileLink: {
      color: 'inherit',
      textDecoration: 'none',
    }
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="contrast"
              aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Link to="/" className={classes.logoLink}>
              <Typography type="title" color="inherit" className={classes.flex}>
                Made in Alba
              </Typography>
            </Link>
            <Button color="contrast">
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          {this.props.children}
        </main>
        <Divider />
        <div className={classes.footer}>
          <Typography>
            Copyright 2017 @ Made in Alba. Toate drepturile rezervate.
          </Typography>
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
