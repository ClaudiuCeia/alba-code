import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import BackgroundImg from '../../assets/albastatui.JPG';

import Startup from './Startup';

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
    position: 'relative',
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
    background: `linear-gradient(
      103deg,
      rgba(49, 220, 207, .6),
      rgba(36, 79, 231, .6)
    ), url(${BackgroundImg}) no-repeat center 40%`,
    zIndex: 1,
    backgroundSize: 'cover',
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
  }
});

class StartupsSection extends Component {
  render() {
    const { data, classes } = this.props;

    if (data.loading) {
      return (
        <div>
          Loading
        </div>
      );
    }

    if (data.error) {
      return (
        <div>
          Error
        </div>
      );
    }
    
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
                If you build it, they will come
              </Typography>
              <Typography type="title" className={classes.headerText}>
                Startup-uri în Alba Iulia
              </Typography>
            </div>
          </Grid>
        </Grid>
        <div className={classes.sectionBackground}>
        </div>
        <Grid
          container
          spacing={24}
          alignItems="flex-start"
          justify="flex-start"
          className={classnames(classes.content, classes.main)}>
          {data.allStartups.map(startup => (
            <Startup startup={startup} key={startup.name}/>
          ))}
        </Grid>
      </div>
    );
  }
}


const STARTUPS_QUERY = gql`
  query AllStartupsQuery {
    allStartups(orderBy: createdAt_DESC) {
      id
      imageUrl
      description
      name
      link
      domain
    }
  }
`

StartupsSection.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    allStartups: PropTypes.array,
    error: PropTypes.object,
  }).isRequired,
};


export default graphql(STARTUPS_QUERY, {
  options: {
    fetchPolicy: 'network-only',
    pollInterval: 5000,
  },
})(withStyles(styles)(StartupsSection));
