'use strict';

import React from 'react';
import nodeFactory from '../components/nodeFactory';
import Button from '../components/Button';
import RateInput from '../components/RateInput';
import DescriptionInputWithFocus from '../components/DescriptionInputWithFocus';

export default props => {
  const Row = nodeFactory.createRow();
  const Col = nodeFactory.createCol();
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        {props.title}
      </div>
      <div className="panel-body pie-form-panel-body">
        <form onSubmit={props.onSubmit}>
          <div className="container-fluid pie-form-container">
            <Row>
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
              <Col
                className="pie-form-control"
                xs={12}
                sm={2}
              >
                <Button
                  disabled={props.blocked}
                />
              </Col>
            </Row>
          </div>
        </form>
      </div>
    </div>
  );
};