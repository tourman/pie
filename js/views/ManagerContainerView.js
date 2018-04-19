'use strict';

import React from 'react';
import nodeFactory from '../components/nodeFactory';

export default props => {
  const Row = nodeFactory.createRow();
  return (
    <div>
      <div className="panel panel-default">
        <div className="panel-heading">
          {props.title}
        </div>
        <div className="panel-body pie-form-panel-body">
          <form onSubmit={props.onSubmit}>
            <div className="container-fluid pie-form-container">
              <Row>
              {props.children}
              </Row>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};