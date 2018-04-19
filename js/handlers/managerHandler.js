'use strict';

import managerActions from '../actions/managerActions';

const managerHandler = {
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
};

export default managerHandler;