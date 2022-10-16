import { type Component, For } from 'solid-js';
import { type DefaultTheme } from 'vitepress';
import { A } from 'solid-start';

interface Props {
  list: DefaultTheme.SocialLink[];
}

const SocialLinks: Component<Props> = (props) => {
  return (
    <ul flex="~" h="full" items="center" list="none" m="0" p="l-0 r-6">
      <For each={props.list}>
        {(item) => (
          <li h="full" flex="~" items="center" p="x-2">
            <A
              class="flex h-full inline-block items-center no-underline text-blue-500 hover:text-blue-600"
              href={item.link}
            >
              <i class={`i-carbon-logo-${item.icon}`} text="6" inline="block" />
            </A>
          </li>
        )}
      </For>
    </ul>
  );
};

export default SocialLinks;
