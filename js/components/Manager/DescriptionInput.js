import React from 'react';
import nodeFactory from '../nodeFactory';

export default (props) => {
  const FormControl = nodeFactory.createFormControl();
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