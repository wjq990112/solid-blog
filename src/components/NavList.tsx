import { type Component, For } from 'solid-js';
import { type DefaultTheme } from 'vitepress';
import NavListItem from './NavListItem';

interface Props {
  list: DefaultTheme.NavItem[];
}

const NavList: Component<Props> = (props) => {
  return (
    <ul flex="~" h="full" items="center" list="none" p="0" m="0">
      <For each={props.list}>{(item) => <NavListItem item={item} />}</For>
    </ul>
  );
};

export default NavList;
