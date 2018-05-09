import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import DebouncedManagerView from 'views/DebouncedManagerView';

import factories from 'factories/';

class Manager extends Component {
  constructor(props) {
    super(props);
    this.factories = props.factories || factories;
    this.store = this.factories.store.createManagerStore();
    this.itemStore = this.factories.store.createItemStore();
    this.state = this.store.getState();
    this.handler = this.factories.handler.createManagerHandler();
  }

  @autobind
  setState(...args) {
    return super.setState(...args);
  }

  componentDidMount() {
    const mountManager = this.factories.action.createAction('mountManager');
    mountManager();
    this.store.addListener(this.setState);
  }

  componentWillUnmount() {
    this.store.removeListener(this.setState);
  }

  getProps() {
    const props = {
      ...this.state,
      ...this.handler,
    };
    return props;
  }

  render() {
    const props = this.getProps();
    return <DebouncedManagerView {...props} />
  }
}

export default Manager;