import { type Component } from 'solid-js';
import config from 'solidocs/config';
import { DocumentTitle } from '~/components';

const Home: Component = () => {
  const { themeConfig = {} } = config;
  const { siteTitle = 'Home' } = themeConfig;

  return (
    <>
      <DocumentTitle>{siteTitle}</DocumentTitle>
    </>
  );
};

export default Home;
