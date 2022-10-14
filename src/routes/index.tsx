import { type Component } from 'solid-js';
import { DocumentTitle } from '~/components';

const Home: Component = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <main>Hello World</main>
    </>
  );
};

export default Home;
