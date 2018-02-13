import React, { Component } from 'react';

class Manager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Manager',
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
    this.setState({
      description: '',
      rate: ''
    });
  }

  render() {
    return (
      <div className="manager">
        <h3 className="manager__title">
          {this.state.title}
        </h3>
        <form
          className="manager__form manager-form"
          onSubmit={this.onSubmit}
        >
          <input
            type="text"
            className="manager-form__description"
            name="description"
            value={this.state.description}
            placeholder="Description"
            onChange={this.onChangeDescription}
          />
          <input
            type="text"
            className="manager-form__rate"
            name="rate"
            value={this.state.rate}
            placeholder="Rate"
            onChange={this.onChangeRate}
          />
          <button
            type="submit"
            className="manager-form__submit"
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default Manager;