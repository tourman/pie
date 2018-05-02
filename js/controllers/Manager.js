import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import ManagerView from '../views/ManagerView';

import storeFactory from 'factories/storeFactory';
import handlerFactory from 'factories/handlerFactory';

class Manager extends Component {
  constructor(props) {
    super(props);
    this.store = storeFactory.createManagerStore();
    this.state = this.store.getState();
    this.handler = handlerFactory.createManagerHandler();
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