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

    sync(method, model, options) {
      const success = options.success;
      const error   = options.error;
      const promise = new Promise((resolve, reject) => {
        Object.assign(options, {
          success : function() {
            setTimeout(() => success.apply(this, arguments));
          },
          error   : function() {
            setTimeout(() => error  .apply(this, arguments));
          },
        });
        super.sync(method, model, options).then(
          function() {
            setTimeout(() => resolve.apply(this, arguments));
          },
          function() {
            setTimeout(() => reject .apply(this, arguments));
          },
        );
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