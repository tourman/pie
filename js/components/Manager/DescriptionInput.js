import React from 'react';

export default (props) => {
  return (
    <input
      type="text"
      className="form-control"
      name="description"
      value={props.value}
      placeholder="Description"
      autoComplete="off"
      onChange={props.onChange}
      ref={props.inputRef}
    />
  )
}