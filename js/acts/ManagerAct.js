'use strict';

import autobind from 'autobind-decorator';
import managerDataModel from '../states/managerDataModel';
import managerStateModel from '../states/managerStateModel';

class ManagerAct {
  constructor({dataModel, stateModel} = {}) {
    this.dataModel  = dataModel  || managerDataModel;
    this.stateModel = stateModel || managerStateModel;
  }

  @autobind
  changeItem({item}) {
    this.dataModel .save(item);
    this.stateModel.setValidAndBlocked(this.dataModel);
    this.stateModel.save();
  }

  @autobind
  resetItem() {
    this.dataModel .save({
      description : '',
      rate        : '',
    });
    this.stateModel.setValidAndBlocked(this.dataModel);
    this.stateModel.save({
      focus       : true,
    });
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