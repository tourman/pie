'use strict';

import modelFactory from '../models/LocalStorageModelFactory';
import utils from '../utils/common';

const Model = modelFactory('manager');

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

export default new ManagerStateModel();