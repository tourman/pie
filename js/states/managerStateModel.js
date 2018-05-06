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
      loading     : false,
    };
    return defaults;
  }

  saveValidAndBlocked(dataModel) {
    const valid   = dataModel.isValid();
    const blocked = dataModel.isBlocked();
    const stateToSave = {
      valid,
      blocked,
    };
    const result = this.save(stateToSave);
    return result;
  }
};

export default new ManagerStateModel();