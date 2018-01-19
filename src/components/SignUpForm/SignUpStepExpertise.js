import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
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
  },
  selectedButton: {
    background: 'rgba(100, 0, 255, .6)',
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
    'Hacklang'
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
    selectedSpecialty: null,
    selectedSkills: [],
  }

  constructor(props) {
    super(props);
    const { profile } = props;

    let selectedSpecialty = profile.specialty;
    let selectedSkills = profile.skills;

    if (!selectedSpecialty) {
      return;
    }

    let skills = (specialty) => {
      let foundSkills = [];

      SpecialtyList.forEach(el => {
        if (el.specialty === specialty) {
          foundSkills = el.skills;
          return;
        }
      });

      return foundSkills ? foundSkills : [];
    }

    this.state = {
      selectedSpecialty: selectedSpecialty,
      skills: skills(selectedSpecialty),
      selectedSkills: selectedSkills
    };
  }

  findSkillsForSpecialty(specialty) {
  }

  handleInput = field => event => {
    this.props.handler(field, event.target.value);
  }

  expandSpecialty = (specialty, skills) => event => {
      this.setState({
        skills: skills,
        selectedSpecialty: specialty,
      });

      this.props.handler('specialty', specialty);
  }

  handleSkill = skill => event => {
      const selectedSkills = this.state.selectedSkills;
      const idx = selectedSkills.indexOf(skill);

      if (idx !== -1) {
        selectedSkills.splice(idx, 1);
      } else {
        selectedSkills.push(skill);
      }

      this.setState({ selectedSkills: selectedSkills});
      this.props.handler('skills', selectedSkills);
  }

  render() {
    const { classes } = this.props;
    let { selectedSpecialty, selectedSkills } = this.state;

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
                  className={classnames(
                    classes.button,
                    (selectedSkills.indexOf(skill) !== -1
                      ? classes.selectedButton
                      : null),
                  )}>
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
                  onClick={this.expandSpecialty(
                    specialty.specialty,
                    specialty.skills,
                  )}
                  className={classnames(
                    classes.button,
                    (selectedSpecialty === specialty.specialty
                      ? classes.selectedButton
                      : null),
                  )}>
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
    profile: PropTypes.object.isRequired,
    handler: PropTypes.func,
};

export default withStyles(styles)(SignUpStepExpertise);
