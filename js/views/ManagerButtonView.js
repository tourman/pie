'use strict';

import React from 'react';
import nodeFactory from '../components/nodeFactory';
import Button from '../components/Button';

export default props => {
  const Col = nodeFactory.createCol();
  return (
    <Col
      className="pie-form-control"
      xs={12}
      sm={2}
    >
      <Button
        disabled={props.blocked}
      />
    </Col>
  );
};