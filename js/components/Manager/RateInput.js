import React from 'react';
import gridFactory from '../gridFactory';

export default (props) => {
  const validationState = props.valid ? null : 'error';
  const FormGroup = gridFactory.createFormGroup();
  const FormControl = gridFactory.createFormControl();
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