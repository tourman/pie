'use strict';

import Model from './Model';
import { LocalStorage } from 'backbone.localstorage';

export default localStorageKey => {
  class LocalStorageModel extends Model {};
  LocalStorageModel.prototype.localStorage = new LocalStorage(localStorageKey);
  return LocalStorageModel;
};