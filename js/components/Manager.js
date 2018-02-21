import React, { Component } from 'react';
import managerActions from '../actions/managerActions';
import Button from './Manager/Button';
import RateInput from './Manager/RateInput';
import DescriptionInput from './Manager/DescriptionInput';
import managerStore from '../stores/managerStore';
import autoBind from '../utils/autobind';
import { Col } from 'react-bootstrap';

class Manager extends Component {
  constructor(props) {
    super(props);

    this.state = managerStore.getState();

    autoBind(this, [
      'onChangeDescription',
      'onChangeRate',
      'onSubmit',
      'setState'
    ]);
  }

  onChangeDescription(event) {
    event.preventDefault();
    managerActions.changeItem({
      description: event.target.value
    });
  }

  onChangeRate(event) {
    event.preventDefault();
    managerActions.changeItem({
      rate: event.target.value
    });
  }

  componentDidMount() {
    managerStore.addListener(this.setState);
  }

  onSubmit(event) {
    event.preventDefault();
    managerActions.addNewItem();
    this.descriptionInput.focus();
    managerActions.resetItem();
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          {this.state.title}
        </div>
        <div className="panel-body pie-form-panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="container-fluid pie-form-container">
              <div className="row">
                <Col
                  className="pie-form-control"
                  xs={12}
                  sm={5}
                >
                  <DescriptionInput
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    inputRef={input => this.descriptionInput = input}
                  />
                </Col>
                <Col
                  className="pie-form-control"
                  xs={12}
                  sm={5}
                >
                  <RateInput
                    value={this.state.rate}
                    onChange={this.onChangeRate}
                    valid={this.state.valid}
                  />
                </Col>
                <Col
                  className="pie-form-control"
                  xs={12}
                  sm={2}
                >
                  <Button
                    disabled={this.state.blocked}
                  />
                </Col>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Manager;