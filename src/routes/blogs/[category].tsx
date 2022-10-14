import { type Component } from 'solid-js';
import { useParams } from 'solid-start';
import { DocumentTitle } from '~/components';

const Blog: Component = () => {
  const params = useParams<{ category: string }>();

  return (
    <>
      <DocumentTitle>{params.category}</DocumentTitle>
      <div>{params.category}</div>
    </>
  );
};

export default Blog;
