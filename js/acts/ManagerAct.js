'use strict';

import autobind from 'autobind-decorator';
import managerDataModel from '../states/managerDataModel';
import managerStateModel from '../states/managerStateModel';
import managerActions from '../actions/managerActions';

class ManagerAct {
  constructor({dataModel, stateModel, actions} = {}) {
    this.dataModel  = dataModel  || managerDataModel;
    this.stateModel = stateModel || managerStateModel;
    this.actions    = actions    || managerActions;
  }

  @autobind
  changeItem({item}) {
    this.dataModel .save(item);
    this.stateModel.saveValidAndBlocked(this.dataModel);
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