'use strict';

import React from 'react';
import nodeFactory from '../components/nodeFactory';
import RateInput from '../components/RateInput';

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