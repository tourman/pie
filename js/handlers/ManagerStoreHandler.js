'use strict';

import managerDataModel from '../states/managerDataModel';
import managerStateModel from '../states/managerStateModel';
import managerActions from '../actions/managerActions';

class ManagerStoreHandler {
  constructor({store}) {
    this.store = store;
  }

  changeItem({itemModel}) {
    const {
      description,
      rate,
    } = itemModel.get();
    const valid = itemModel.isValid();
    const blocked = !itemModel.isReady();
    const state = {
      description,
      rate,
      valid,
      blocked,
    };
    this.store.model.set(state);
  }

  focusItem() {
    this.store.stateModel.save({
      focus       : true,
    });
  }

  blurItem() {
    this.store.stateModel.save({
      focus       : false,
    });
  }
};

export default ManagerStoreHandler;