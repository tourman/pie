'use strict';

import Model from '../models/Model';
import utils from '../utils/common';
import { LocalStorage } from 'backbone.localstorage';

class ManagerStateModel extends Model {
  defaults() {
    const defaults = {
      id          : 'manager',
      title       : 'Try to add an item',
      description : '',
      rate        : '',
      valid       : true,
      focus       : true,
      blocked     : true
    };
    return defaults;
  }

  setBlocked() {
    const blocked = this.isBlocked();
    this.set({
      blocked
    })
    return this;
  }

  isBlocked() {
    const state = this.get();
    const emptyDescription = !state.description.length;
    const emptyRate = !state.rate.length;
    const invalid = !this.isValid();
    const blocked = emptyDescription || emptyRate || invalid;
    return blocked;
  }

  setValid() {
    const valid = this.isValid();
    this.set({
      valid
    })
    return this;
  }

  isValid(state) {
    const rate = this.get('rate');
    const valid = utils.isStringAPositiveIntegerOrZero(rate);
    return valid;
  }
};

ManagerStateModel.prototype.localStorage = new LocalStorage('manager');

export default new ManagerStateModel();