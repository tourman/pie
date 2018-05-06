'use strict';

import autobind from 'autobind-decorator';
import managerDataModel from '../states/managerDataModel';
import managerStateModel from '../states/managerStateModel';
import managerActions from '../actions/managerActions';

class ManagerStoreHandler {
  constructor({store}) {
    this.store = store;
  }

  @autobind
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

  @autobind
  resetItem() {
    this.store.actions.changeItem({
      description : '',
      rate        : '',
    });
    this.store.actions.focusItem();
  }

  @autobind
  endReadItem() {
    this.store.stateModel.save({
      loading     : false,
    });
  }

  @autobind
  focusItem() {
    this.store.stateModel.save({
      focus       : true,
    });
  }

  @autobind
  blurItem() {
    this.store.stateModel.save({
      focus       : false,
    });
  }
};

export default ManagerStoreHandler;