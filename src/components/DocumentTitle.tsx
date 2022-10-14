import { type FlowComponent } from 'solid-js';
import { Title } from 'solid-start';

const DocumentTitle: FlowComponent = (props) => {
  return <Title>Solid Blog - {props.children}</Title>;
};

export default DocumentTitle;
