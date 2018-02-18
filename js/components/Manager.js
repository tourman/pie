import React, { Component } from 'react';
import managerActions from '../actions/managerActions';
import Button from './Manager/Button';
import RateInput from './Manager/RateInput';
import DescriptionInput from './Manager/DescriptionInput';
import BootstrapGrid from './BootstrapGrid';
import managerStore from '../stores/managerStore';

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
    this.setState = this.setState.bind(this);
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
    managerStore.on(this.setState);
  }

  componentWillUnmount() {
    managerStore.off(this.setState);
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
                <DescriptionInput
                  xs="************"
                  sm="*****       "
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  inputRef={input => this.descriptionInput = input}
                />
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