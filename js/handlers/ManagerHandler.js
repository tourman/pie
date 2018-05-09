'use strict';

import factories from 'factories/';

class ManagerHandler {
  constructor() {
    Object.getOwnPropertyNames(this.constructor.prototype)
      .filter(name => /^on/.test(name))
      .map(name => this[name] = this[name])
    ;
  }

  onChangeRate(event) {
    const item = {
      rate: event.target.value
    };
    const setItem = factories.action.createAction('setItem');
    event.preventDefault();
    setItem({
      item
    });
  }

  onChangeDescription(event) {
    const item = {
      description: event.target.value
    };
    const setItem = factories.action.createAction('setItem');
    event.preventDefault();
    setItem({
      item
    });
  }

  onSubmit(event) {
    event.preventDefault();
    managerActions.addNewItem();
    managerActions.resetItem();
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