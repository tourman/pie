'use strict';

import dispatcher from 'dispatcher/';
import managerStore from '../stores/managerStore';
import ItemStore from 'stores/ItemStore';

class StoreFactory {
  createManagerStore() {
    return managerStore;
  }

  createItemStore() {
    this.itemStore = this.itemStore || new ItemStore(dispatcher);
    return this.itemStore;
  }
};

export default StoreFactory;