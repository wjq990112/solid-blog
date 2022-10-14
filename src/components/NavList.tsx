import { type Component, For } from 'solid-js';
import { type DefaultTheme } from 'vitepress';
import NavListItem from './NavListItem';

interface Props {
  list: DefaultTheme.NavItem[];
}

const NavList: Component<Props> = (props) => {
  return (
    <nav h="full">
      <ul flex="~" h="full" items="center" list="none" p="x-6" m="0">
        <For each={props.list}>{(item) => <NavListItem item={item} />}</For>
      </ul>
    </nav>
  );
};

export default NavList;
