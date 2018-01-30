import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
    position: 'relative',
    marginBottom: 30,
  },
  [theme.breakpoints.up("md")]: {
    content: {
      maxWidth: 1140,
      margin: '0 auto',
    },
  },
  [theme.breakpoints.down("md")]: {
    content: {
      maxWidth: 900,
      margin: '0 auto',
    },
  },
  card: {
    maxHeight: 400,
  },
  media: {
    height: 200,
    '&:after': {
      content: '""',
      width: '100%',
      height: '100%',
      display: 'block',
    }
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  sectionBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 350,
    zIndex: 1,
  },
  main: {
    zIndex: 2,
    position: 'relative',
  },
  header: {
    position: 'relative',
    zIndex: 2,
    paddingTop: 50,
    paddingBottom: 30,
  },
  headerText: {
    color: '#fff',
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 3,
    padding: 20,
  },
  sectionGrid: {
    marginTop: theme.spacing.unit,
  },
  sectionGridHeadline: {
    textTransform: 'uppercase',
    position: 'relative',
    letterSpacing: '.5px',
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: '1.5em',
  }
});

class Section extends Component {
  render() {
    const {
      classes,
      headline,
      subtitle,
      sectionTitle,
      backgroundImg,
    } = this.props;

    const sectionBackgroundStyle = {
      background: `linear-gradient(
        103deg,
        rgba(49, 220, 207, .6),
        rgba(36, 79, 231, .6)
      ), url(${backgroundImg}) no-repeat center 40%`,
      backgroundSize: 'cover',
    };

    return (
      <div className={classes.root}>
        <Grid
          container
          spacing={24}
          alignItems="flex-start"
          justify="flex-start"
          className={classnames(classes.content, classes.main)}>
          <Grid item xs={12}>
            <div className={classnames(classes.content, classes.header)}>
              <Typography type="headline" className={classes.headerText}>
                {headline}
              </Typography>
              <Typography type="title" className={classes.headerText}>
                {subtitle}
              </Typography>
            </div>
          </Grid>
        </Grid>
        <div
          className={classes.sectionBackground}
          style={sectionBackgroundStyle}>
        </div>
        <Paper
          className={classnames(classes.content, classes.main, classes.box)}
          elevation={0}>
          <Typography type="title" className={classes.sectionGridHeadline}>
            {sectionTitle}
          </Typography>
          <Divider />
          <Grid
            container
            spacing={24}
            alignItems="flex-start"
            justify="flex-start"
            className={classes.sectionGrid}>
            {this.props.children}
          </Grid>
        </Paper>
      </div>
    );
  }
}

Section.propTypes = {
  classes: PropTypes.object.isRequired,
  headline: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  sectionTitle: PropTypes.string.isRequired,
  backgroundImg: PropTypes.string.isRequired,
};


export default withStyles(styles)(Section);
