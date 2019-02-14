import React from 'react';
import { useSpring, config } from 'react-spring';
import Layout from '../layout/index';
import SEO from '../components/seo';
import { IndexStyles, Title } from '../styles/IndexStyles';

const IndexPage = () => {
  const spring = useSpring({
    config: config.wobbly,
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(100px)' },
  });
  return (
    <Layout>
      <SEO title="Start" />
      <IndexStyles>
        <Title style={spring}>Welcome to mymusic!</Title>
      </IndexStyles>
    </Layout>
  );
};

export default IndexPage;
