import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import BackgroundImg from '../../assets/albastatui.JPG';

import Section from '../Section';
import Startup from './Startup';

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const styles = theme => ({

});

class StartupsSection extends Component {
  render() {
    const { data } = this.props;

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
      <Section
        headline="If you build it, they will come"
        subtitle="Startup-uri în Alba Iulia"
        sectionTitle="Startup-uri în Alba Iulia"
        backgroundImg={BackgroundImg}>
        {data.allStartups.map(startup => (
          <Startup startup={startup} key={startup.name}/>
        ))}
      </Section>
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
      logo
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
