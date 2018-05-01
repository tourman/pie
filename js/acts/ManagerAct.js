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
  changeItem({item, state: {loading = false}}) {
    this.dataModel .save(item);
    this.stateModel.setValidAndBlockedAndSave(this.dataModel, {
      loading
    });
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
  fetchItem() {
    this.stateModel.save({
      loading     : true,
    });
    this.dataModel.fetch();
  }

  @autobind
  focusItem() {
    this.stateModel.save({
      focus       : true
    });
  }

  @autobind
  blurItem() {
    this.stateModel.save({
      focus       : false
    });
  }
};

export default ManagerAct;