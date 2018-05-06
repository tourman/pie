import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import ManagerView from '../views/ManagerView';

import globalFactories from 'factories';

class Manager extends Component {
  constructor(props) {
    super(props);
    const factories = props.factories || globalFactories;
    this.store = factories.store.createManagerStore();
    this.itemStore = factories.store.createItemStore();
    this.state = this.store.getState();
    this.handler = factories.handler.createManagerHandler();
  }

  @autobind
  setState(...args) {
    return super.setState(...args);
  }

  componentDidMount() {
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
    return <ManagerView {...props} />
  }
}

export default Manager;