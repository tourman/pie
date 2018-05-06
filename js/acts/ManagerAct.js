'use strict';

import autobind from 'autobind-decorator';
import managerDataModel from '../states/managerDataModel';
import managerStateModel from '../states/managerStateModel';
import managerActions from '../actions/managerActions';

class ManagerAct {
  constructor({model, dataModel, stateModel, actions, factories} = {}) {
    this.dataModel  = dataModel  || managerDataModel;
    this.stateModel = stateModel || managerStateModel;
    this.actions    = actions    || managerActions;
    this.model      = model;
    this.factories  = factories;
  }

  @autobind
  changeItem({item}) {
    const itemModel = this.factories.model.createItemModel();
    const valid = itemModel.isValid();
    const state = {
      ...item,
      valid
    };
    this.model.set(state);
  }

  @autobind
  resetItem() {
    this.actions.changeItem({
      description : '',
      rate        : '',
    });
    this.actions.focusItem();
  }

  @autobind
  endReadItem() {
    this.stateModel.save({
      loading     : false,
    });
  }

  @autobind
  focusItem() {
    this.stateModel.save({
      focus       : true,
    });
  }

  @autobind
  blurItem() {
    this.stateModel.save({
      focus       : false,
    });
  }
};

export default ManagerAct;