'use strict';

import managerStore from '../stores/managerStore';
import itemStore from '../stores/itemStore';

export default {
  createManagerStore() {
    return managerStore;
  },

  createItemStore() {
    return itemStore;
  }
};