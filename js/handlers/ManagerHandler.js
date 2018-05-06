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
    event.preventDefault();
    factories.action.createAction('changeItem')({
      item
    });
  }

  onChangeDescription(event) {
    const item = {
      description: event.target.value
    };
    event.preventDefault();
    factories.action.createAction('changeItem')({
      item
    });
  }

  onSubmit(event) {
    event.preventDefault();
    managerActions.addNewItem();
    managerActions.resetItem();
  }

  onFocusDescription() {
    managerActions.focusItem();
  }

  onBlurDescription() {
    managerActions.blurItem();
  }
};

export default ManagerHandler;