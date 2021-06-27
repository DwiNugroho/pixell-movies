import '@testing-library/jest-dom/extend-expect';

function createRef<T>(): RefObject<T>;
interface RefObject<T> {
  // immutable
  readonly current: T | null;
}
