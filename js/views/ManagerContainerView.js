'use strict';

import React from 'react';
import nodeFactory from './nodeFactory';

export default props => {
  const Row = nodeFactory.createRow();
  const panelLoadingClassName = [
    'pie-panel-loading__overlap',
    'pie-panel-loading__overlap_skin_white-static',
    props.loading ? 'pie-panel-loading__overlap_visible' : 'pie-panel-loading__overlap_hidden',
  ].join(' ');
  return (
    <div>
      <div className="panel panel-default pie-panel-loading">
        <div className={panelLoadingClassName}></div>
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