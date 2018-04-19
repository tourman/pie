import React, { Component } from 'react';
import Focus from '../components/Focus';
import DescriptionInput from './DescriptionInput';

export default function DescriptionInputWithFocus(props) {
  return (
    <Focus
      {...props}
      wrappedComponent={DescriptionInput}
    />
  );
};