import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import PlayIcon from '../../assets/play.svg';
import { AlbumContainer, TopAlbumsContainer, Album } from '../styles/OverviewStyles';

const AlbumsOverview = ({ data }) => {
  const props = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(50px)' },
  });

  return (
    <animated.div style={props}>
      <h2>Your most popular albums:</h2>
      <TopAlbumsContainer>
        {data.map((album) => {
				  const url = album.image[3]['#text'];
				  const style = {
				    backgroundImage: `url(${url})`,
				  };

				  return (
  <AlbumContainer key={album.name}>
    <a href={album.url} target="_blank" rel="noopener noreferrer">
      <Album style={style} />
      <span>
        <PlayIcon />
        {' '}
        {album.playcount}
      </span>
    </a>
  </AlbumContainer>
				  );
        })}
      </TopAlbumsContainer>
    </animated.div>
  );
};

export default AlbumsOverview;

AlbumsOverview.propTypes = {
  data: PropTypes.array,
};

AlbumsOverview.defaultProps = {
  data: [],
};
