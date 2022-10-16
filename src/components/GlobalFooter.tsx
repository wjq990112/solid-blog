import { type Component, Show } from 'solid-js';
import config from 'solidocs/config';

const GlobalFooter: Component = () => {
  const { themeConfig = {} } = config;
  const { footer = {} } = themeConfig;

  return (
    <footer
      border="t gray-100"
      flex="~ col"
      h="16"
      items="center"
      justify="center"
      shadow="~"
    >
      <Show when={footer.message}>
        <span text="sm gray-500">{footer.message}</span>
      </Show>
      <Show when={footer.copyright}>
        <span text="sm gray-500">{footer.copyright}</span>
      </Show>
    </footer>
  );
};

export default GlobalFooter;
