'use strict';

import modelFactory from '../models/LocalStorageModelFactory';
import utils from '../utils/common';

const Model = modelFactory('managerState');

class ManagerStateModel extends Model {
  defaultsToExtend() {
    const defaults = {
      title       : 'Try to add an item',
      valid       : true,
      focus       : true,
      blocked     : true,
      loading     : true,
    };
    return defaults;
  }

  setValidAndBlockedAndSave(dataModel, state) {
    const valid   = dataModel.isValid();
    const blocked = dataModel.isBlocked();
    const stateToSave = {
      valid,
      blocked,
      ...state,
    };
    const result = this.set(stateToSave);
    return result;
  }
};

export default new ManagerStateModel();