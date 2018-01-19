import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { LinearProgress } from 'material-ui/Progress';

import SignUpStepName from './SignUpStepName';
import SignUpStepEmail from './SignUpStepEmail';
import SignUpStepExpertise from './SignUpStepExpertise';
import SignUpStepConfirm from './SignUpStepConfirm';

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
    marginRight: theme.spacing.unit * 3,
  },
  signUpNext: {
    marginTop: theme.spacing.unit * 3,
  },
  signUpPrevious: {
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 3,
  }
});

const SignUpSteps = [
  SignUpStepName,
  SignUpStepExpertise,
  SignUpStepEmail,
  SignUpStepConfirm,
];

class SignUpForm extends Component {
  stepProgressValue = 100 / SignUpSteps.length;

  state = {
    currentStep: 0,
    nume: null,
    prenume: null,
    specialty: null,
    skills: [],
    email: null,
    occupation: null,
  };

  constructor(props) {
    super(props);
    this.stepHandler = this.stepHandler.bind(this)
    this.state.occupation = props.occupation;
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
    if (this.state.currentStep < SignUpSteps.length - 1) {
      this.setState({
        currentStep: this.state.currentStep + 1,
      });
    }
  };

  previousStep = event => {
    if (this.state.currentStep > 0) {
      this.setState({
        currentStep: this.state.currentStep - 1,
      });
    }
  };

  render() {
    const { classes } = this.props;
    const CurrentStep = this.getCurrentStep();

    if (CurrentStep === undefined) {
      return <div>Something went bonkers.</div>;
    }

    let previousButton = null;
    if (this.state.currentStep > 0) {
      previousButton =
        <Button
          onClick={this.previousStep}
          raised
          className={classes.signUpPrevious}>
          Înapoi
        </Button>;
    }

    let nextButton = null;
    if (this.state.currentStep < SignUpSteps.length - 1) {
      nextButton =
        <Button
          onClick={this.nextStep}
          raised
          color="primary"
          className={classes.signUpNext}>
          Continuă
        </Button>;
    }

    let confirmButton = null;
    if (this.state.currentStep === SignUpSteps.length - 1) {
      confirmButton =
        <Button
          onClick={this.nextStep}
          raised
          color="primary"
          className={classes.signUpNext}>
          Confirmă
        </Button>;
    }

    return (
      <div className={classes.root}>
        <LinearProgress
          mode="determinate"
          value={this.state.currentStep * this.stepProgressValue}
        />
        <div className={classes.header}>
          <CurrentStep
            handler={this.stepHandler}
            profile={this.state}
          />
          {previousButton}
          {nextButton}
          {confirmButton}
        </div>
      </div>
    );
  }
}

SignUpForm.propTypes = {
    classes: PropTypes.object.isRequired,
    occupation: PropTypes.string.isRequired,
};

export default withStyles(styles)(SignUpForm);
