import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import ArrowForwardIcon from 'material-ui-icons/ArrowForward';
import WWWIcon from 'material-ui-icons/Public';

import WhiteCityCodeImg from '../../assets/whitecitycode.png';
import TagDivImg from '../../assets/tagdiv.jpg';
import TekkieConsultingImg from '../../assets/tekkieconsulting.jpg';
import OMSImg from '../../assets/oms.png';
import BackgroundImg from '../../assets/albastatui.JPG';

const Startups = [{
  name: 'WhiteCity Code',
  description: 'A Romanian company based in Alba Iulia (White City). We are a highly qualified and experienced team, with a total of 18 years of studies in Computer Science, Management, Translations and even Law.',
  logo: WhiteCityCodeImg,
  link: 'https://whitecitycode.com/',
  domain: 'Software',
}, {
  name: 'Tekkie Consulting',
  description: 'We are an application development shop that helps our clients manage complex workflows and ideas. We translate them into compact, fast, usable software that delivers value from day one. We handle projects from conception to launch and maintenance.',
  logo: TekkieConsultingImg,
  link: 'https://tekkie.ro/',
  domain: 'Software',
}, {
  name: 'TagDiv',
  description: 'Combining top class coding, fresh intuitive design, and unmatched functionality, we build outstanding WordPress themes. Our goal is to create simple, elegant web solutions that help our clients accomplish their goals without effort. For this, we explore cutting-edge technologies and infuse them into beautifully handcrafted themes.',
  logo: TagDivImg,
  link: 'https://tagdiv.com',
  domain: 'WordPress',
}, {
  name: 'OMS',
  description: 'We are a software developing company that uses mainly .NET technology, but also Java, PHP or BI for Branded software products.',
  logo: OMSImg,
  link: 'http://oms-soft.com/',
  domain: 'Software',
}];

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
      /*background: `linear-gradient(
        103deg,
        rgba(49, 220, 207, .6),
        rgba(36, 79, 231, .6)
      )`,*/
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
    const { classes } = this.props;

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
          {Startups.map(startup => (
            <Grid item xs={12} sm={4} key={startup.name}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={'https://placeimg.com/275/200/tech?'+startup.domain}
                  title={startup.name}
                />
                <CardContent>
                  <Typography type="headline" component="h2">
                    {startup.name}
                  </Typography>
                  <Typography component="p">
                    {startup.domain}
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
          ))}
        </Grid>
      </div>
    );
  }
}

StartupsSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StartupsSection);
