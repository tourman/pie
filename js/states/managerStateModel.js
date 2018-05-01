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

  setValidAndBlocked(dataModel) {
    const valid   = dataModel.isValid();
    const blocked = dataModel.isBlocked();
    this.set({
      valid,
      blocked,
    });
    return this;
  }
};

export default new ManagerStateModel();