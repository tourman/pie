import Focus from './Focus';

export default function wrapFocus(WrappedComponent) {
  const WrappedComponentWithFocus = Focus.bind(null, WrappedComponent);
  return WrappedComponentWithFocus;
}