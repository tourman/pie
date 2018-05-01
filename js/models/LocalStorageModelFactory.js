'use strict';

import Model from './Model';
import { LocalStorage } from 'backbone.localstorage';
import utils from '../utils/common';

export default localStorageKey => {
  class LocalStorageModel extends Model {
    defaults() {
      const toExtend = this.defaultsToExtend();
      const defaults = utils.cloneAndExtend({
        id: localStorageKey,
      }, toExtend);
      return defaults;
    }

    fetch(...args) {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          super.fetch(...args).then(resolve, reject);
        });
      });
      return promise;
    }

    defaultsToExtend() {
      return {};
    }
  };
  LocalStorageModel.prototype.localStorage = new LocalStorage(localStorageKey);
  return LocalStorageModel;
};