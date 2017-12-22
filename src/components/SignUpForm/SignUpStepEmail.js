import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

const styles = theme => ({
  root: {
    minHeight: 350,
    position: 'relative',
  },
  header: theme.mixins.gutters({
    paddingTop: theme.spacing.unit * 10,
    flex: '1 1 100%',
    maxWidth: '100%',
    margin: '0 auto',
  }),
  [theme.breakpoints.up(900 + theme.spacing.unit * 6)]: {
    header: {
      maxWidth: 900,
    },
  },
  headline: {
    fontSize: '2rem',
    textAlign: 'left',
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

class SignUpStepEmail extends Component {
  handleInput = field => event => {
    this.props.handler(field, event.target.value);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography
          type="headline"
          align="center"
          className={classnames(
            classes.headline
          )}>
          Care este adresa ta de email?
        </Typography>
        <div className={classes.signUpForm}>
          <FormControl className={classes.signUpField}>
            <InputLabel htmlFor="email">Adresă de email</InputLabel>
            <Input
              id="email"
              type="text"
              onChange={this.handleInput('email')}
            />
          </FormControl>
        </div>
      </div>
    );
  }
}

SignUpStepEmail.propTypes = {
    classes: PropTypes.object.isRequired,
    handler: PropTypes.func,
};

export default withStyles(styles)(SignUpStepEmail);
