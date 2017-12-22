import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { LinearProgress } from 'material-ui/Progress';

import SignUpStepName from './SignUpStepName';
import SignUpStepEmail from './SignUpStepEmail';
import SignUpStepExpertise from './SignUpStepExpertise';
 
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

const SignUpSteps = [
  SignUpStepExpertise,
  SignUpStepName,
  SignUpStepEmail,
];

class SignUpForm extends Component {
  stepProgressValue = 100 / SignUpSteps.length;

  state = {
    currentStep: 0,
    nume: '',
    prenume: '',
  };

  constructor(props) {
    super(props);

    this.stepHandler = this.stepHandler.bind(this)
  }

  stepHandler(field, value) {
    this.setState({
      [field]: value,
    })
  }

  getCurrentStep() {
    return SignUpSteps[this.state.currentStep];
  }

  nextStep = event => {
    this.setState({
      currentStep: this.state.currentStep+1,
    })
  };

  render() {
    const { classes } = this.props;

    console.log(this.state);
    const CurrentStep = this.getCurrentStep();

    if (CurrentStep === null) {
      return <div>Something went bonkers.</div>;
    }

    return (
      <div className={classes.root}>
        <LinearProgress
          mode="determinate"
          value={this.state.currentStep * this.stepProgressValue}
        />
        <div className={classes.header}>
          <CurrentStep handler={this.stepHandler} />
          <Button
            onClick={this.nextStep}
            raised
            color="primary"
            className={classes.signUpNext}>
            Continuă
          </Button>
        </div>
      </div>
    );
  }
}

SignUpForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUpForm);
