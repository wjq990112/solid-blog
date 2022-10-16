import { type Component } from 'solid-js';
import { FileRoutes, Routes } from 'solid-start';
import { GlobalFooter, GlobalHeader } from '~/components';

const Layout: Component = () => {
  return (
    <>
      <GlobalHeader />
      <main box="border" min-h="[calc(100vh-8rem)]">
        <Routes>
          <FileRoutes />
        </Routes>
      </main>
      <GlobalFooter />
    </>
  );
};

export default Layout;
