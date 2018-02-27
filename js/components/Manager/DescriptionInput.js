import React from 'react';
import gridFactory from '../gridFactory';

export default (props) => {
  const FormControl = gridFactory.createFormControl();
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