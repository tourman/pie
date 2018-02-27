import React from 'react';
import gridFactory from '../gridFactory';

export default (props) => {
  const Button = gridFactory.createButton();
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