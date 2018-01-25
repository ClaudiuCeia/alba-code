import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import ArrowForwardIcon from 'material-ui-icons/ArrowForward';
import WWWIcon from 'material-ui-icons/Public';

const styles = theme => ({
  card: {
    maxHeight: 400,
    boxShadow: 'none',
    backgroundColor: '#F0F2FA',
  },
  media: {
    height: 200,
    position: 'relative',
    '&:before': {
      content: '""',
      width: '100%',
      height: '100%',
      display: 'block',
      background: 'rgba(0, 0, 0, .2)',
    }
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  button: {
    color: '#7F8398',
  },
  label: {
    textTransform: 'uppercase',
    lineHeight: '1.5rem',
    color: '#7F8398',
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  startupName: {
    fontWeight: 'bold',
  },
  startupLogo: {
    height: '50px',
    bottom: '10px',
    position: 'absolute',
    right: '10px',
  }
});

class Startup extends Component {
  render() {
    const { classes, startup } = this.props;

    return (
      <Grid item xs={12} sm={3} key={startup.name}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={startup.imageUrl}
            title={startup.name}>
          </CardMedia>
          <CardContent>
            <Typography
              type="title"
              component="h2"
              className={classes.startupName}>
              {startup.name}
            </Typography>
            <Typography
              component="p"
              className={classes.label}>
              Software
            </Typography>
          </CardContent>
          <CardActions>
            <Button dense color="secondary" className={classes.button}>
              <ArrowForwardIcon className={classes.leftIcon} />
              Detalii
            </Button>
            <Button dense color="secondary" className={classes.button}>
              <WWWIcon className={classes.leftIcon} />
              www
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

Startup.propTypes = {
  classes: PropTypes.object.isRequired,
  startup: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    domain: PropTypes.string.isRequired,
  }),
};

export default withStyles(styles)(Startup);
