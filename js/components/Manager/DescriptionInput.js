import React from 'react';
import { FormControl } from 'react-bootstrap';

export default (props) => {
  return (
    <FormControl
      type="text"
      name="description"
      value={props.value}
      placeholder="Description"
      autoComplete="off"
      onChange={props.onChange}
      inputRef={props.controlRef}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  )
}