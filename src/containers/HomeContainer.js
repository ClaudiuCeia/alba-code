import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

import headerBackgroundImage from '../assets/header1920blank.jpg';

import SignUpForm from '../components/SignUpForm/SignUpForm';
import StartupsSection from '../components/StartupsSection/StartupsSection';

const styles = theme => ({
  root: {
    minHeight: 350,
    position: 'relative',
  },
  section: {
    paddingTop: 50,
    padding: theme.spacing.unit * 3,
  },
  header: theme.mixins.gutters({
    paddingTop: theme.spacing.unit * 10,
    paddingBottom: theme.spacing.unit * 10,
    flex: '1 1 100%',
    maxWidth: '100%',
    margin: '0 auto',
    '&:before': {
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'block',
      width: '100%',
      height: '100%',
      content: '""',
      background: `
        linear-gradient(rgba(100, 0, 255, .6),
        rgba(100, 0, 255, .6)),
        url(${headerBackgroundImage}) no-repeat center center`,
      backgroundSize: 'cover',
    }
  }),
  [theme.breakpoints.up(900 + theme.spacing.unit * 6)]: {
    header: {
      maxWidth: 900,
    },
  },
  headline: {
    color: '#fff',
    fontSize: '2rem',
    width: '65%',
    margin: '0 auto',
    position: 'relative'
  },
  searchForm: {
    background: 'rgba(255, 255, 255, 1)',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listLink: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    }
  },
  callToAction: {
    position: 'relative',
    marginTop: theme.spacing.unit * 6,
  },
  ctaText: {
    position: 'relative',
    color: '#fff',
  },
  ctaButton: {
    border: '3px solid #fff',
  },
  ctaSelect: {
    color: '#fff',
  },
  ctaSelectIcon: {
    color: '#fff',
  },
  signUpForm: {
    marginTop: theme.spacing.unit * 3,
  },
  signUpField: {
    marginRight: theme.spacing.unit * 3
  },
  signUpNext: {
    marginTop: theme.spacing.unit * 3
  }
});

class HomeContainer extends Component {
  state = {
    occupation: "antreprenor",
    isSigningUp: false,
  }

  handleOccupationChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSignUp = event => {
    this.setState({ isSigningUp: true });
  }
  render() {
    const { classes } = this.props;

    const header = (
      <div className={classnames(classes.root, classes.bg)}>
        <div className={classes.header}>
          <Typography
            type="headline"
            align="center"
            className={classnames(
              classes.headline
            )}>
            Comunitatea de startup-uri și tehnologie din Alba Iulia
          </Typography>
          <Grid
            alignItems="center"
            justify="center"
            container
            className={classes.callToAction}>
            <Grid item>
              <Typography type="subheading" className={classes.ctaText}>
                Sunt
              </Typography>
            </Grid>
            <Grid item>
              <FormControl>
                <Select
                  value={this.state.occupation}
                  classes={{
                    select: classes.ctaSelect,
                    icon: classes.ctaSelectIcon,
                  }}
                  onChange={this.handleOccupationChange}
                  input={<Input name="occupation" id="occupation" />}>
                  <MenuItem value="antreprenor">antreprenor</MenuItem>
                  <MenuItem value="specialist">specialist</MenuItem>
                  <MenuItem value="investitor">investitor</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <Typography type="subheading" className={classes.ctaText}>
                și vreau să mă
              </Typography>
            </Grid>
            <Grid item>
              <Button
                color="contrast"
                className={classes.ctaButton}
                onClick={this.handleSignUp}>
                înscriu
              </Button>
            </Grid>
          </Grid>
        </div>
        <StartupsSection />
      </div>
    );

    return !this.state.isSigningUp
      ? header :
      <SignUpForm occupation={this.state.occupation} />;
  }
}

HomeContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeContainer);
