import { type Component, Show } from 'solid-js';
import config from 'solidocs/config';
import NavList from './NavList';
import logo from '../assets/logo.svg';

const GlobalHeader: Component = () => {
  const { themeConfig = {} } = config;
  const { nav = [] } = themeConfig;

  return (
    <header border="b gray-100" flex="~" h="16" justify="between" shadow="~">
      <div h="full" flex="~" items="center">
        <img box="border" h="full" p="2" src={logo} />
        <span font="bold" text="xl">
          Solid Blog
        </span>
      </div>
      <Show when={nav.length}>
        <NavList list={nav} />
      </Show>
    </header>
  );
};

export default GlobalHeader;
