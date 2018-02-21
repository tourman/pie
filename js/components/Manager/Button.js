import React from 'react';
import classNames from 'classnames';
import { Button } from 'react-bootstrap';

export default (props) => {
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