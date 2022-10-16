import { type FlowComponent } from 'solid-js';
import { Title } from 'solid-start';
import config from 'solidocs/config';

const DocumentTitle: FlowComponent = (props) => {
  return (
    <Title>
      {props.children} | {config.titleTemplate}
    </Title>
  );
};

export default DocumentTitle;
