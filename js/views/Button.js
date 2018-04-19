import React from 'react';
import nodeFactory from './nodeFactory';

export default (props) => {
  const Button = nodeFactory.createButton();
  return (
    <Button
      type="submit"
      bsStyle="primary"
      block
      disabled={props.disabled}
    >
      Add
    </Button>
  )
}