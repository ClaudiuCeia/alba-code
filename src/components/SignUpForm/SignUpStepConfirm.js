import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import Gravatar from '../../lib/Gravatar';

import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

import WorkIcon from 'material-ui-icons/Work';


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
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  media: {
    width: 151,
    heighth: 151,
  },
  chipList: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
});

class SignUpStepConfirm extends Component {
  render() {
    const { classes, profile } = this.props;
    const profilePicture = new Gravatar(profile.email ? profile.email : '');

    return (
      <div>
        <Typography
          type="headline"
          align="center"
          className={classnames(
            classes.headline
          )}>
          Confirmă profilul
        </Typography>
        <div className={classes.signUpForm}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={profilePicture.get(151)}
              title="Profile Picture"
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography type="headline" component="h2">
                  {profile.prenume} {profile.nume} / {profile.occupation}
                </Typography>
                <Chip
                  avatar={
                    <Avatar>
                      <WorkIcon />
                    </Avatar>
                  }
                  label={profile.specialty}
                  className={classes.chip}
                />
                <div className={classes.chipList}>
                  {profile.skills.map(data => {
                      return (
                        <Chip
                          key={data}
                          avatar={null}
                          label={data}
                          className={classes.chip}
                        />
                      );
                  })}
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

SignUpStepConfirm.propTypes = {
    classes: PropTypes.object.isRequired,
    handler: PropTypes.func,
};

export default withStyles(styles)(SignUpStepConfirm);
