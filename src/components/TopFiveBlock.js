import React from 'react';
import { useTrail, animated } from 'react-spring';
import PropTypes from 'prop-types';
import PlayIcon from '../../assets/play.svg';
import { TopFiveBlock } from '../styles/OverviewStyles';

const TopFive = ({ data, title }) => {
  const trail = useTrail(data.length, {
    // config: config.gentle,
    from: { opacity: 0, transform: 'translateY(25px)' },
    to: { transform: 'translateY(0px)', opacity: 1 },
  });
  return (
    <TopFiveBlock>
      <h2>{title}</h2>
      <ol>
        {trail.map((props, index) => (
          <animated.li style={props} key={data[index].name}>
            <a href={data[index].url} target="_blank" rel="noopener noreferrer">
              <span>{data[index].name}</span>
              <span>
                <PlayIcon />
                {' '}
                {data[index].playcount}
              </span>
            </a>
          </animated.li>
        ))}
      </ol>
    </TopFiveBlock>
  );
};

export default TopFive;

TopFive.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
};

TopFive.defaultProps = {
  title: '',
  data: {},
};
