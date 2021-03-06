import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout/index';
import UserLayout from '../layout/User';
import SEO from '../components/seo';
import Artists from '../components/artists';

const ArtistsPage = ({ location }) => (
  <Layout>
    <SEO title="Artists" keywords={['artists', ' annat', 'mer keywords']} />
    <UserLayout location={location} user={location.state.user}>
      <Artists user={location.state.user} />
    </UserLayout>
  </Layout>
);

export default ArtistsPage;

ArtistsPage.propTypes = {
  location: PropTypes.object,
};

ArtistsPage.defaultProps = {
  location: {},
};
