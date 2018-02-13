import React, { Component } from 'react';
import Manager from '../components/Manager';
import List from '../components/List';

class App extends Component {
  render() {
    return (
      <div className="root">
        <h1 className="root__header">
          Pie Application
        </h1>

        <div className="manager-container">
          <Manager />
        </div>

        <div className="list-container">
          <List />
        </div>
      </div>
    );
  }
}

export default App;