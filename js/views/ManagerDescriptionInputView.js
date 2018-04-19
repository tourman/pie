'use strict';

import React from 'react';
import nodeFactory from './nodeFactory';
import DescriptionInputWithFocus from './DescriptionInputWithFocus';

export default props => {
  const Col = nodeFactory.createCol();
  return (
    <Col
      className="pie-form-control"
      xs={12}
      sm={5}
    >
      <DescriptionInputWithFocus
        value={props.description}
        focus={props.focus}
        onChange={props.onChangeDescription}
        onFocus={props.onFocusDescription}
        onBlur={props.onBlurDescription}
      />
    </Col>
  );
};