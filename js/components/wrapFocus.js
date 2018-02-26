import React, { Component } from 'react';
import Focus from './Focus';

export default function wrapFocus(WrappedComponent) {
  return function(props) {
    return (
      <Focus
        {...props}
        wrappedComponent={WrappedComponent}
      />
    );
  };
}