'use strict';

import modelFactory from '../models/LocalStorageModelFactory';
import utils from 'utils/common';

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

  validate(item) {
    const valid = utils.isStringAPositiveIntegerOrZero(item.rate);
    const validationString = valid ? '' : 'Rate is not valid';
    return validationString;
  }

  isReady() {
    const {
      description,
      rate,
    } = this.get();
    const readyDescription = description.length;
    const readyRate = rate.length;
    const valid = this.isValid();
    const ready = readyDescription && readyRate && valid;
    return ready;
  }
};

export default ItemModel;