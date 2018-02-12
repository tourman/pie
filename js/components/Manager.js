import React, { Component } from 'react';

class Manager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Manager',
      description: '',
      rate: ''
    };
  }

  render() {
    return (
      <div className="manager">
        <h3 className="manager__title">
          {this.state.title}
        </h3>
        <form className="manager__form manager-form">
          <input
            type="text"
            className="manager-form__description"
            name="description"
            value={this.state.description}
            placeholder="Description"
          />
          <input
            type="text"
            className="manager-form__rate"
            name="rate"
            value={this.state.rate}
            placeholder="Rate"
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