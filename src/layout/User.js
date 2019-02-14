import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';

const UserLayout = ({ children, location }) => (
  <div style={{ display: 'flex' }}>
    <Header location={location} />
    {children}
  </div>
);

export default UserLayout;

UserLayout.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
};

UserLayout.defaultProps = {
  children: {},
  location: {},
};
