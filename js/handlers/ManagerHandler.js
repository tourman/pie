'use strict';

import factories from 'factories/';

class ManagerHandler {
  constructor() {
    this.factories = factories;
    Object.getOwnPropertyNames(this.constructor.prototype)
      .filter(name => /^on/.test(name))
      .map(name => this[name] = this[name].bind(this))
    ;
  }

  onChangeRate(event) {
    const item = {
      rate: event.target.value
    };
    const setItem = this.factories.action.createAction('setItem');
    event.preventDefault();
    setItem({
      item
    });
  }

  onChangeDescription(event) {
    const item = {
      description: event.target.value
    };
    const setItem = this.factories.action.createAction('setItem');
    event.preventDefault();
    setItem({
      item
    });
  }

  onSubmit(event) {
    const addItem   = this.factories.action.createAction('addItem');
    const resetItem = this.factories.action.createAction('resetItem');
    event.preventDefault();
    addItem();
    resetItem();
  }

  onFocusDescription() {
    //managerActions.focusItem();
    console.warn('onFocusDescription needs to be completed');
  }

  onBlurDescription() {
    //managerActions.blurItem();
    console.warn('onBlurDescription needs to be completed');
  }
};

export default ManagerHandler;