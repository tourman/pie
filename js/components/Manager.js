import React, { Component } from 'react';
import managerActions from '../actions/managerActions';
import managerStore from '../stores/managerStore';
import autobind from 'autobind-decorator';
import ManagerView from '../views/ManagerView';

class Manager extends Component {
  constructor(props) {
    super(props);
    this.state = managerStore.getState();
    this.handler = (() => ({
      onChangeRate(event) {
        event.preventDefault();
        managerActions.changeItem({
          rate: event.target.value
        });
      },

      onChangeDescription(event) {
        event.preventDefault();
        managerActions.changeItem({
          description: event.target.value
        });
      },

      onSubmit(event) {
        event.preventDefault();
        managerActions.addNewItem();
        managerActions.resetItem();
      },

      onFocusDescription() {
        managerActions.focusItem();
      },

      onBlurDescription() {
        managerActions.blurItem();
      }
    }))();
    Object.keys(this.handler).forEach(key => this.handler[key] = this.handler[key].bind(this));
  }

  @autobind
  setState(...args) {
    return super.setState(...args);
  }

  componentDidMount() {
    managerStore.addListener(this.setState);
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