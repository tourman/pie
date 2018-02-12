import React, { Component } from 'react';
import Manager from '../components/Manager';
import List from '../components/List';

class App extends Component {
  render() {
    return (
      <div class="root">
        <h1 class="root__header">Pie Application</h1>

        <div class="manager-container">
          <Manager />
        </div>

        <div class="list-container">
          <List />
        </div>

      </div>
    );
  }
}

export default App;