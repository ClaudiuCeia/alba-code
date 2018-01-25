import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import MenuIcon from 'material-ui-icons/Menu';

import AllInclusiveIcon from 'material-ui-icons/AllInclusive';
import HomeIcon from 'material-ui-icons/Home';

import {
  Link,
} from 'react-router-dom';

const styles = theme => ({
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    logoLink: {
      color: '#fff',
      textDecoration: 'none',
      display: 'inline-flex',
      flex: 1,
    },
    iconLeft: {
      marginRight: theme.spacing.unit,
    }
});

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="contrast"
            aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Link to="/" className={classes.logoLink}>
            <AllInclusiveIcon className={classes.iconLeft} />
            <Typography type="title" color="inherit" className={classes.flex}>
              localhost
            </Typography>
          </Link>
          <Button color="contrast">
            <HomeIcon />
          </Button>
          <Button color="contrast">
            Despre
          </Button>
          <Button color="contrast">
            Startup-uri
          </Button>
          <Button color="contrast">
            Evenimente
          </Button>
          <Button color="contrast">
            Hai și tu
          </Button>
          <Button color="contrast">
            Noutăți
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
