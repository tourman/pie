import React, { Component } from 'react';
import managerActions from '../actions/managerActions';
import Button from './Manager/Button';
import RateInput from './Manager/RateInput';
import BootstrapGrid from './BootstrapGrid';

class Manager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Try to add an item',
      description: '',
      rate: ''
    };

    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeRate = this.onChangeRate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeDescription(event) {
    event.preventDefault();
    this.setState({
      description: event.target.value
    });
  }

  onChangeRate(event) {
    event.preventDefault();
    this.setState({
      rate: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    managerActions.addNewItem(this.state);
    this.descriptionInput.focus();
    this.setState({
      description: '',
      rate: ''
    });
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
                <div className="
                    col-xs-12
                    col-sm-5
                    pie-form-control
                  "
                >
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    value={this.state.description}
                    placeholder="Description"
                    autoComplete="off"
                    onChange={this.onChangeDescription}
                    ref={input => this.descriptionInput = input}
                  />
                </div>
                <RateInput
                  xs="************"
                  sm="     *****  "
                  value={this.state.rate}
                  onChange={this.onChangeRate}
                />
                <Button
                  xs="************"
                  sm="          **"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Manager;