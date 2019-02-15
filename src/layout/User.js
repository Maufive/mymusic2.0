import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../components/header';

const UserLayoutStyle = styled.div`
	display: flex;

	@media (max-width: 1000px) {
		flex-direction: column;
	}
`;

const UserLayout = ({ children, location }) => (
  <UserLayoutStyle>
    <Header location={location} user={location.state.user} />
    {children}
  </UserLayoutStyle>
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
