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
    this.drawChart = this.drawChart.bind(this);
  }

  getAllItems() {
    let items = listStore.getAllItems();
    items = items.map(this.mapItems);
    return items;
  }

  mapItems(item) {
    item = [
      item.description,
      parseFloat(item.rate)
    ];
    return item;
  }

  //The content got from google example: https://developers.google.com/chart/interactive/docs/quick_start
  prepareChart() {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(this.drawChart);
  }

  drawChart() {
    let data = this.getChartData();

    let options = {'title':'How Much Pizza I Ate Last Night',
                   'width':400,
                   'height':300};

    this.chart = this.chart || new google.visualization.PieChart(this.chartNode);
    this.chart.draw(data, options);
  }

  getChartData() {
    let data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows(this.state.items);
    return data;
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

  componentDidUpdate() {
    this.drawChart();
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
