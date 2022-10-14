// @refresh reload
import 'uno.css';
import { type Component, For, Suspense } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import {
  Body,
  ErrorBoundary,
  Head,
  Html,
  Meta,
  Scripts,
  Title,
} from 'solid-start';
import config from 'solidocs/config';
import { Layout } from './layouts';

const Root: Component = () => {
  return (
    <Html lang={config.lang}>
      <Head>
        <Title>{config.title}</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="description" content={config.description} />
        <For each={config.head}>
          {([tag, props]) => <Dynamic component={tag} {...props} />}
        </For>
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Layout />
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
};

export default Root;
