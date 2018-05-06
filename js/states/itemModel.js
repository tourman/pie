'use strict';

import modelFactory from '../models/LocalStorageModelFactory';
import utils from '../utils/common';

const Model = modelFactory('managerState');

class ManagerStateModel extends Model {
  defaultsToExtend() {
    const defaults = {
      description : '',
      rate        : '',
    };
    return defaults;
  }

  isChanged() {
    const length = Object.keys(this.changed).length;
    const changed = !!length;
    return changed;
  }
};

export default new ManagerStateModel();