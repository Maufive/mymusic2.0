import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { NavItem } from '../styles/HeaderStyles';

const Navlink = ({
  children, location, to, user,
}) => {
  const active = location.pathname === to;
  return (
    <div>
      {active ? (
        <Link to={to} state={user}>
          <NavItem activeitem>{children}</NavItem>
        </Link>
      ) : (
        <Link to={to} state={user}>
          <NavItem>{children}</NavItem>
        </Link>
      )}
    </div>
  );
};

export default Navlink;

Navlink.propTypes = {
  location: PropTypes.object,
  to: PropTypes.string,
  children: PropTypes.array, // Blir array istället för string eftersom det är en SVG i menyitemet.
  user: PropTypes.object,
};

Navlink.defaultProps = {
  location: {},
  to: '',
  children: {},
  user: {},
};
