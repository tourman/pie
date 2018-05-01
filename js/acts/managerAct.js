'use strict';

import managerDataModel from '../states/managerDataModel';
import managerStateModel from '../states/managerStateModel';

class ManagerAct {
  changeItem({item}) {
    managerDataModel.set(item);
  }

  resetItem() {
    managerDataModel.set({
      description : '',
      rate        : '',
    });
    managerStateModel.set({
      focus       : true,
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