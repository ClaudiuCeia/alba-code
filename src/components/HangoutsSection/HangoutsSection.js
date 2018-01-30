import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import BackgroundImg from '../../assets/stockgathering.jpg';

import Section from '../Section';
import HangoutPlace from './HangoutPlace';

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const styles = theme => ({

});

class HangoutsSection extends Component {
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
        headline="Where can you find us"
        subtitle="Pubs and stuff"
        sectionTitle="List of places"
        backgroundImg={BackgroundImg}>
        {data.allHangoutPlaces.map(hangoutPlace => (
          <HangoutPlace hangoutPlace={hangoutPlace} key={hangoutPlace.name}/>
        ))}
      </Section>
    );
  }
}


const HANGOUT_PLACES_QUERY = gql`
  query AllHangoutPlacesQuery {
    allHangoutPlaces(orderBy: createdAt_DESC) {
      id
      imageUrl
      description
      name
      link
      logoUrl
      type
    }
  }
`

HangoutsSection.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    allHangoutPlaces: PropTypes.array,
    error: PropTypes.object,
  }).isRequired,
};


export default graphql(HANGOUT_PLACES_QUERY, {
  options: {
    fetchPolicy: 'network-only',
    pollInterval: 5000,
  },
})(withStyles(styles)(HangoutsSection));
