import { type Component, Show } from 'solid-js';
import { A } from 'solid-start';
import config from 'solidocs/config';
import NavList from './NavList';
import SocialLinks from './SocialLinks';

const GlobalHeader: Component = () => {
  const { themeConfig = {} } = config;
  const { logo, siteTitle, nav = [], socialLinks } = themeConfig;

  return (
    <header border="b gray-100" flex="~" h="16" justify="between" shadow="~">
      <Show when={logo || siteTitle}>
        <A
          class="h-full flex items-center no-underline text-blue-500 hover:text-blue-600"
          href="/"
        >
          <Show when={logo}>
            <img box="border" h="full" p="2" src={logo as string} />
          </Show>
          <Show when={siteTitle}>
            <span font="bold" text="xl">
              {siteTitle}
            </span>
          </Show>
        </A>
      </Show>
      <Show when={nav.length || socialLinks.length}>
        <nav h="full" flex="~">
          <Show when={nav.length}>
            <NavList list={nav} />
          </Show>
          <Show when={socialLinks.length}>
            <SocialLinks list={socialLinks} />
          </Show>
        </nav>
      </Show>
    </header>
  );
};

export default GlobalHeader;
