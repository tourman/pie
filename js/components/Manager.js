import React, { Component } from 'react';
import managerActions from '../actions/managerActions';

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
                <div className="
                    col-xs-12
                    col-sm-5
                    pie-form-control
                  "
                >
                  <input
                    type="text"
                    className="form-control"
                    name="rate"
                    value={this.state.rate}
                    placeholder="Rate"
                    autoComplete="off"
                    onChange={this.onChangeRate}
                  />
                </div>
                <div className="
                    col-xs-12
                    col-sm-2
                    pie-form-control
                  "
                >
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Manager;