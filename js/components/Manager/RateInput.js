import React from 'react';

export default (props) => {
  return (
    <input
      type="text"
      className="form-control"
      name="rate"
      value={props.value}
      placeholder="Rate"
      autoComplete="off"
      onChange={props.onChange}
    />
  )
}