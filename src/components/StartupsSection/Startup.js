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
});

class Startup extends Component {
  render() {
    const { classes, startup } = this.props;

    return (
      <Grid item xs={12} sm={4} key={startup.name}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={startup.imageUrl}
            title={startup.name}
          />
          <CardContent>
            <Typography type="headline" component="h2">
              {startup.name}
            </Typography>
            <Typography component="p">
              Software
            </Typography>
          </CardContent>
          <CardActions>
            <Button dense color="primary">
              <ArrowForwardIcon className={classes.leftIcon} />
              Detalii
            </Button>
            <Button dense color="primary">
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
