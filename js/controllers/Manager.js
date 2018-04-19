import React, { Component } from 'react';
import managerStore from '../stores/managerStore';
import autobind from 'autobind-decorator';
import ManagerView from '../views/ManagerView';
import managerHandler from '../handlers/managerHandler';

class Manager extends Component {
  constructor(props) {
    super(props);
    this.state = managerStore.getState();
    this.handler = managerHandler;
  }

  @autobind
  setState(...args) {
    return super.setState(...args);
  }

  componentDidMount() {
    managerStore.addListener(this.setState);
  }

  componentWillUnmount() {
    managerStore.removeListener(this.setState);
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