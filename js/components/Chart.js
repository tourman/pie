import React, { Component } from 'react';
import google from '../vendors/google';
import listStore from '../stores/listStore';

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.getAllItems()
    };

    this.onChange = this.onChange.bind(this);
    this.mapItems = this.mapItems.bind(this);
  }

  getAllItems() {
    let items = listStore.getAllItems();
    items = items.map(this.mapItems);
    return items;
  }

  mapItems(item) {
    item = [
      item.description,
      item.rate
    ];
    return item;
  }

  //The content got from google example: https://developers.google.com/chart/interactive/docs/quick_start
  prepareChart() {
    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['corechart']});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart.bind(this));

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart() {

      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      data.addRows([
        ['Mushrooms', 3],
        ['Onions', 1],
        ['Olives', 1],
        ['Zucchini', 1],
        ['Pepperoni', 2]
      ]);

      // Set chart options
      var options = {'title':'How Much Pizza I Ate Last Night',
                     'width':400,
                     'height':300};

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.PieChart(this.chartNode);
      chart.draw(data, options);
    }
  }

  onChange() {
    this.setState({
      items: this.getAllItems()
    });
  }

  componentDidMount() {
    listStore.addChangeListener(this.onChange);
    this.prepareChart();
  }

  componentWillUnmount() {
    listStore.removeChangeListener(this.onChange);
  }

  render() {
    console.log('Re-render chart');
    return (
      <div
        id="chart_div"
        ref={chartNode => this.chartNode = chartNode}
      >
      </div>
    );
  }
}

export default Chart;
