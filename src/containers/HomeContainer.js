import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import headerBackgroundImage from '../assets/header1920blank.jpg';

import StartupsSection from '../components/StartupsSection/StartupsSection';

const styles = theme => ({
  root: {
    minHeight: 420,
    position: 'relative',
  },
  [theme.breakpoints.up("md")]: {
    headerContent: {
      maxWidth: 1140,
      margin: '0 auto',
    },
  },
  [theme.breakpoints.down("md")]: {
    headerContent: {
      maxWidth: 900,
      margin: '0 auto',
    },
  },
  header: theme.mixins.gutters({
    minHeight: 320,
    flex: '1 1 100%',
    margin: '0 auto',
    position: 'relative',
    marginBottom: 100,
    '&:before': {
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'block',
      width: '100%',
      height: '100%',
      content: '""',
      backgroundImage: `
        linear-gradient(106deg, rgba(118,51,183, .65), rgba(13,83,154, .65)),
        url(${headerBackgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
    }
  }),
  headerContent: {
    paddingTop: 80,
  },
  headline: {
    color: '#fff',
    fontSize: '3rem',
    width: '55%',
    position: 'relative'
  },
  headlineNote: {
    color: '#fff',
    textTransform: 'uppercase',
    position: 'relative',
    letterSpacing: '.5px',
    fontSize: '14px',
    fontWeight: 'bold',
  }
});

class HomeContainer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classnames(classes.root, classes.bg)}>
        <div className={classes.header}>
          <div className={classes.headerContent}>
            <Typography
              type="title"
              className={classes.headlineNote}>
              O comunitate de 361 de albaiulieni
            </Typography>
            <Typography
              type="headline"
              className={classnames(
                classes.headline
              )}>
              Startup-uri creative și tehnologie în Alba Iulia
            </Typography>
          </div>
        </div>
        <StartupsSection />
      </div>
    );
  }
}

HomeContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeContainer);
