import { type Component } from 'solid-js';
import { FileRoutes, Routes } from 'solid-start';
import { GlobalFooter, GlobalHeader } from '~/components';

const Layout: Component = () => {
  return (
    <>
      <GlobalHeader />
      <Routes>
        <FileRoutes />
      </Routes>
      <GlobalFooter />
    </>
  );
};

export default Layout;
