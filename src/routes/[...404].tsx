import { type Component } from 'solid-js';
import { HttpStatusCode } from 'solid-start/server';
import { DocumentTitle } from '~/components';

const NotFound: Component = () => {
  return (
    <>
      <HttpStatusCode code={404} />
      <DocumentTitle>Not Found</DocumentTitle>
      <main>404</main>
    </>
  );
};

export default NotFound;
