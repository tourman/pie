'use strict';

import modelFactory from '../models/LocalStorageModelFactory';

const Model = modelFactory('managerState');

class ItemModel extends Model {
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

export default ItemModel;