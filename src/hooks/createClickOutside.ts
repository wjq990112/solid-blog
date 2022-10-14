import { type AnyFn } from '../types';
import { createSignal } from 'solid-js';

const createClickOutside = (target: HTMLElement, listener: AnyFn) => {
  let fallback: number;
  const [shouldListen, setShouldListen] = createSignal(true);

  const handleClick = (event: PointerEvent) => {
    window.clearTimeout(fallback);

    const composedPath = event.composedPath();

    if (!shouldListen() || composedPath.includes(target)) {
      return;
    }

    listener(event);
  };

  const handlePointerDown = (event: PointerEvent) => {
    const composedPath = event.composedPath();
    setShouldListen(!composedPath.includes(target));
  };

  const handlePointerUp = (event: PointerEvent) => {
    fallback = window.setTimeout(() => handleClick(event), 50);
  };

  window.addEventListener('click', handleClick, { passive: true });
  window.addEventListener('pointerdown', handlePointerDown, { passive: true });
  window.addEventListener('pointerup', handlePointerUp, { passive: true });

  const unregister = () => {
    window.removeEventListener('click', handleClick);
    window.removeEventListener('pointerdown', handlePointerDown);
    window.removeEventListener('pointerup', handlePointerUp);
  };

  return unregister;
};

export default createClickOutside;
