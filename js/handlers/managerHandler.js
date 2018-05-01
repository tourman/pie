'use strict';

import managerActions from '../actions/managerActions';

const managerHandler = {
  onChangeRate(event) {
    const item = {
      rate: event.target.value
    };
    event.preventDefault();
    managerActions.changeItem({
      item
    });
  },

  onChangeDescription(event) {
    const item = {
      description: event.target.value
    };
    event.preventDefault();
    managerActions.changeItem({
      item
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
};

export default managerHandler;