import React, { Component } from 'react';
import Manager from '../components/Manager';
import List from '../components/List';
import Chart from '../components/Chart';

class App extends Component {
  render() {
    return (
      <div className="
          pie-root
          container
        "
      >
        <div className="row">
          <div className="
              col-xs-12
              col-sm-10 col-sm-offset-1
              col-md-8  col-md-offset-2
              col-lg-6  col-lg-offset-3
            "
          >
            <h1 className="pie-header">
              Pie Application
            </h1>

            <div>
              <Manager />
            </div>

            <div>
              <Chart />
            </div>

            <div>
              <List />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;