import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import Header from './components/Header';

const styles = theme => ({
    root: {
      width: '100%',
      backgroundColor: '#efefef',
    },
    flex: {
      flex: 1,
    },
    buttonOutline: {
      border: '1px solid rgba(255, 255, 255, .5)',
      margin: theme.spacing.unit,
      fontWeight: 'normal',
    },
    content: {
      maxWidth: '100%',
      flex: 1,
      //backgroundColor: theme.palette.background.default,
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
        <Header />
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
