import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout/index';
import UserLayout from '../layout/User';
import SEO from '../components/seo';
import Albums from '../components/albums';

const AlbumsPage = ({ location }) => (
  <Layout>
    <SEO title="Albums" keywords={['albums', ' annat', 'mer keywords']} />
    <UserLayout location={location} user={location.state.user}>
      <Albums user={location.state.user} />
    </UserLayout>
  </Layout>
);

export default AlbumsPage;

AlbumsPage.propTypes = {
  location: PropTypes.object,
};

AlbumsPage.defaultProps = {
  location: {},
};
