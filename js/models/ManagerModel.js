'use strict';

import modelFactory from '../models/LocalStorageModelFactory';
import utils from '../utils/common';

const Model = modelFactory('managerState');

class ManagerModel extends Model {
  defaultsToExtend() {
    const defaults = {
      description : '',
      rate        : '',
      title       : 'Try to add an item',
      valid       : true,
      focus       : true,
      blocked     : true,
      loading     : true,
    };
    return defaults;
  }

  isChanged() {
    const length = Object.keys(this.changed).length;
    const changed = !!length;
    return changed;
  }
};

export default ManagerModel;