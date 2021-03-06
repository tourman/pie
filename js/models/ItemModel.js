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

  sync(method, model, options) {
    const fn = this[method] || (() => {});
    options.method = method;
    let result = fn.call(this, model, options);
    result = result || Promise.resolve();
    return result;
  }

  read(model, options) {
    return new Promise(resolve => {
      const success = resp => {
        resolve(resp);
        options.success(resp);
      };
      setTimeout(() => {
        success({
          description : 'test',
          rate        : '18',
        });
      }, 1500);
    });
  }
};

export default ItemModel;