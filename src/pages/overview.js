import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout/index';
import UserLayout from '../layout/User';
import SEO from '../components/seo';
import Overview from '../components/overview';

const OverviewPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Hem" keywords={['gatsby', 'application', 'react']} />
    <UserLayout location={location}>
      <Overview user={location.state.user} />
    </UserLayout>
  </Layout>
);

export default OverviewPage;

OverviewPage.propTypes = {
  location: PropTypes.object,
};

OverviewPage.defaultProps = {
  location: {},
};

// location.state.user
