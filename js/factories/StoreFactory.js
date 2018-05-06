'use strict';

import dispatcher from 'dispatcher/';
import ItemStore from 'stores/ItemStore';
import ManagerStore from 'stores/ManagerStore';

class StoreFactory {
  createManagerStore() {
    this.managerStore = this.managerStore || new ManagerStore(dispatcher);
    return this.managerStore;
  }

  createItemStore() {
    this.itemStore = this.itemStore || new ItemStore(dispatcher);
    return this.itemStore;
  }
};

export default StoreFactory;