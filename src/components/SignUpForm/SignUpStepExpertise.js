import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Input, { InputLabel } from 'material-ui/Input';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

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
  skillsForm: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
  },
  signUpField: {
    marginRight: theme.spacing.unit * 3
  },
  signUpNext: {
    marginTop: theme.spacing.unit * 3
  },
  button: {
    border: '3px solid',
  }
});

const SpecialtyList = [{
  specialty: 'Programator',
  skills: [
    'JavaScript',
    'Java',
    'CoffeeScript',
    'EmacsLisp',
    'Swift',
    'Clojure',
    'CSS',
    'Python',
    'Objective-C',
    'Go',
    'PHP',
    'Ruby',
    'TeX',
    'VimL',
    'C++',
    'C',
    'Scala',
    'Shell',
    'C#',
    'R',
    'Perl',
  ],
}, {
  specialty: 'UX/UI Designer',
  skills: [],
}, {
  specialty: 'Sysadmin',
  skills: [],
}, {
  specialty: 'Project Manager',
  skills: [],
}, {
  specialty: 'People Manager',
  skills: [],
}, {
  specialty: 'Product Manager',
  skills: [],
}, {
  specialty: 'Copywriter',
  skills: [],
}, {
  specialty: 'Marketer',
  skills: [],
}, {
  specialty: 'Resurse Umane',
  skills: [],
}, {
  specialty: 'Tester',
  skills: [],
}, {
  specialty: 'Helpdesk / IT',
  skills: [],
}, {
  specialty: 'Legal',
  skills: [],
}, {
  specialty: 'Finanțe',
  skills: [],
}, {
  specialty: 'Altceva',
  skills: [],
}];

class SignUpStepExpertise extends Component {
  state = {
    skills: [],
  }
  handleInput = field => event => {
    this.props.handler(field, event.target.value);
  }

  expandSpecialty = skills => event => {
      this.setState({ skills: skills });
  }

  handleSkill = skill => event => {
      console.log(skill);
  }

  render() {
    const { classes } = this.props;

    const skillList =
      <div className={classes.skillsForm}>
        {this.state.skills.length > 0
          ? <Typography
              type="headline"
              align="center"
              className={classes.headline}>
              Și ai cunoștiințe de
            </Typography>
          : ''}
        <div className={classes.signUpForm}>
          <Grid container>
            {this.state.skills.map(skill => (
              <Grid item key={skill}>
                <Button
                  onClick={this.handleSkill(skill)}
                  className={classes.button}>
                  {skill}
                </Button>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>;

    return (
      <div>
        <Typography
          type="headline"
          align="center"
          className={classnames(
            classes.headline
          )}>
          Care este specializarea ta de bază?
        </Typography>
        <div className={classes.signUpForm}>
          <Grid container>
            {SpecialtyList.map(specialty => (
              <Grid item key={specialty.specialty}>
                <Button
                  onClick={this.expandSpecialty(specialty.skills)}
                  className={classes.button}>
                  {specialty.specialty}
                </Button>
              </Grid>
            ))}
          </Grid>
          {skillList}
        </div>
      </div>
    );
  }
}

SignUpStepExpertise.propTypes = {
    classes: PropTypes.object.isRequired,
    handler: PropTypes.func,
};

export default withStyles(styles)(SignUpStepExpertise);
