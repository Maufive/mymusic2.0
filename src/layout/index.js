import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useSpring, animated } from 'react-spring';
import Header from '../components/header';
import Jumbotron from './Jumbotron';

const theme = {
  green: '#1EB97F',
  white: '#eee',
  black: '#282828',
  darkGrey: '#3E3E3E',
  grey: '#828282',
  lightGrey: '#e1e1e1',
  maxWidth: '1200px',
  mobileBreakpoint: '768px',
  animationTime: '200ms',
  shadow: '0px 5px 5px rgba(0, 0, 0, 0.2)',
};

const StyledPage = styled.div`
	color: ${props => props.theme.white};
	min-height: 100vh;
	width: 100%;
	padding: 0rem 5rem;
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Sarala|Lato:700');

  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: "Lato", Arial, Helvetica, sans-serif, sans-serif;
		-webkit-font-smoothing: antialiased !important;
    text-shadow:1px 1px 1px 1px rgba(0,0,0,0.005);
    padding: 0;
    margin: 0;
    background: linear-gradient(180deg, #4B6CB7 0%, #182848 100%);
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
    
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
		line-height: 2;
  }

  h1, h2, h3, h4 {
    margin: 0;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  h1 {
    font-family: "Lato" !important;
  }

  h2, h3 {
    font-family: "Sarala" !important;
  }

  a, a:visited {
    color: ${props => props.theme.white};
    text-decoration: none;
  }

  a {
    transition: all 300ms ease-out;
  }

  a:hover {
    color: ${props => props.theme.green};
  }
`;

const Center = styled.div`
	@media (max-width: 1199px) {
		width: 100%;
		padding: 0 2rem;
	}

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		width: 100%;
	}
`;

const Layout = ({ children, location }) => {
  const props = useSpring({ opacity: 1, width: '100%', from: { opacity: 0 } });
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <GlobalStyle />
        <Jumbotron />
        <div style={{ display: 'flex' }}>
          <Header location={location} />
          <animated.div style={props}>
            <Center>{children}</Center>
          </animated.div>
        </div>
      </StyledPage>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
