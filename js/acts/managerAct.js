'use strict';

import managerStateModel from '../states/managerStateModel';

class ManagerAct {
  changeItem({item}) {
    managerStateModel.set(item);
  }

  resetItem() {
    managerStateModel.set({
      focus       : true,
      description : '',
      rate        : '',
    });
  }

  focusItem() {
    managerStateModel.set({
      focus       : true
    });
  }

  blurItem() {
    managerStateModel.set({
      focus       : false
    });
  }
};

export default new ManagerAct();