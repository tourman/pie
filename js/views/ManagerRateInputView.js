'use strict';

import React from 'react';
import nodeFactory from './nodeFactory';
import RateInput from './RateInput';

export default props => {
  const Col = nodeFactory.createCol();
  return (
    <Col
      className="pie-form-control"
      xs={12}
      sm={5}
    >
      <RateInput
        value={props.rate}
        onChange={props.onChangeRate}
        valid={props.valid}
      />
    </Col>
  );
};