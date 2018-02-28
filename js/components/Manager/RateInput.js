import React from 'react';
import nodeFactory from '../nodeFactory';

export default (props) => {
  const validationState = props.valid ? null : 'error';
  const FormGroup = nodeFactory.createFormGroup();
  const FormControl = nodeFactory.createFormControl();
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