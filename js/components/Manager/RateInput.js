import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

export default (props) => {
  const validationState = props.valid ? null : 'error';
  return (
    <FormGroup
      validationState={validationState}
    >
      <FormControl
        type="text"
        name="rate"
        value={props.value}
        placeholder="Rate"
        autoComplete="off"
        onChange={props.onChange}
      />
    </FormGroup>
  )
}