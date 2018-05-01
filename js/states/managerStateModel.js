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
    };
    return defaults;
  }
};

export default new ManagerStateModel();