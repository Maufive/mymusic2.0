import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { useSpring, config } from 'react-spring';
import {
  HeaderStyles, NavItem, Avatar, Nav,
} from '../styles/HeaderStyles';
import NavLink from './NavLink';
import StarIcon from '../../assets/star.svg';
import TunesIcon from '../../assets/tunes.svg';
import ArtistIcon from '../../assets/users.svg';
import AlbumIcon from '../../assets/disc.svg';
import CameraIcon from '../../assets/camera.svg';

const Header = ({ location }) => {
  const props = useSpring({
    opacity: 1,
    transform: 'translateX(0px)',
    from: { opacity: 0, transform: 'translateX(-30px)' },
    config: config.wobbly,
  });

  return (
    <HeaderStyles>
      <Avatar>
        <CameraIcon />
      </Avatar>
      <Nav>
        <NavLink location={location} to="/">
          <StarIcon />
					Overview

        </NavLink>
        <NavLink location={location} to="/songs">
          <TunesIcon />
					Songs

        </NavLink>
        <NavLink location={location} to="/artists">
          <ArtistIcon />
					Artists

        </NavLink>
        <NavLink location={location} to="/albums">
          <AlbumIcon />
					Albums

        </NavLink>
      </Nav>
    </HeaderStyles>
  );
};

Header.propTypes = {
  location: PropTypes.object,
};

Header.defaultProps = {
  location: {},
};

export default Header;
