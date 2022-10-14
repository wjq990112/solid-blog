import {
  type Component,
  For,
  Match,
  Switch,
  createSignal,
  Show,
} from 'solid-js';
import { type DefaultTheme } from 'vitepress';
import { A } from 'solid-start';

interface Props {
  item: DefaultTheme.NavItem;
}

const NavListItem: Component<Props> = (props) => {
  const [spreadSubMenu, setSpreadSubMenu] = createSignal(false);

  return (
    <li h="full" flex="~" items="center" p="x-2">
      <Switch>
        <Match when={(props.item as DefaultTheme.NavItemWithLink).link}>
          <A
            class="flex h-full inline-block items-center no-underline text-blue-500 hover:text-blue-600"
            href={(props.item as DefaultTheme.NavItemWithLink).link}
          >
            {props.item.text}
          </A>
        </Match>
        <Match when={(props.item as DefaultTheme.NavItemWithChildren).items}>
          <div
            h="full"
            flex="~"
            justify="center"
            pos="relative"
            onmouseenter={() => setSpreadSubMenu((v) => !v)}
            onmouseleave={() => setSpreadSubMenu((v) => !v)}
          >
            <div
              cursor="pointer"
              flex="~"
              items="center"
              text="blue-500"
              hover:text="blue-600"
            >
              <span>{props.item.text}</span>
              <i class="i-mdi-chevron-down" />
            </div>
            <Show when={spreadSubMenu()}>
              <ul
                bg="white"
                border="~ gray-100 rd"
                flex="~ col"
                list="none"
                p="x-6 y-2"
                pos="absolute top-12"
                shadow="~"
                w="20"
              >
                <For
                  each={(props.item as DefaultTheme.NavItemWithChildren).items}
                >
                  {(subItem) => (
                    <li p="y-1">
                      <A
                        class="w-full inline-block no-underline text-sm text-blue-500 hover:text-blue-600"
                        href={(subItem as DefaultTheme.NavItemWithLink).link}
                      >
                        {subItem.text}
                      </A>
                    </li>
                  )}
                </For>
              </ul>
            </Show>
          </div>
        </Match>
      </Switch>
    </li>
  );
};

export default NavListItem;
