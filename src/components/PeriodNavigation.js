import React from 'react';
import PropTypes from 'prop-types';
import { Navigation, NavItem } from '../styles/PeriodNavigationNav';

export const PeriodNavigation = ({ location, handleChange }) => (
  <Navigation>
    {location === '7day' ? (
      <NavItem onClick={e => handleChange(e)} value="7day" active>
				Last week

      </NavItem>
    ) : (
      <NavItem onClick={e => handleChange(e)} value="7day">
				Last week

      </NavItem>
    )}
    {location === '1month' ? (
      <NavItem onClick={e => handleChange(e)} value="1month" active>
				Last month

      </NavItem>
    ) : (
      <NavItem onClick={e => handleChange(e)} value="1month">
				Last month

      </NavItem>
    )}
    {location === '6month' ? (
      <NavItem onClick={e => handleChange(e)} value="6month" active>
				Last 6 months

      </NavItem>
    ) : (
      <NavItem onClick={e => handleChange(e)} value="6month">
				Last 6 months

      </NavItem>
    )}
    {location === '12month' ? (
      <NavItem onClick={e => handleChange(e)} value="12month" active>
				Last 12 months

      </NavItem>
    ) : (
      <NavItem onClick={e => handleChange(e)} value="12month">
				Last 12 months

      </NavItem>
    )}
    {location === 'overall' ? (
      <NavItem onClick={e => handleChange(e)} value="overall" active>
				All time

      </NavItem>
    ) : (
      <NavItem onClick={e => handleChange(e)} value="overall">
				All time

      </NavItem>
    )}
  </Navigation>
);

PeriodNavigation.propTypes = {
  location: PropTypes.string,
  handleChange: PropTypes.func,
};

PeriodNavigation.defaultProps = {
  location: '',
  handleChange: PropTypes.func,
};
