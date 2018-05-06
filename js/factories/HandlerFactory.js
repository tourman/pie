'use strict';

import ManagerHandler from 'handlers/ManagerHandler';
import ItemStoreHandler from 'handlers/ItemStoreHandler';
import ManagerStoreHandler from 'handlers/ManagerStoreHandler';

class HandlerFactory {
  createManagerHandler(...args) {
    this.managerHandler = this.managerHandler || new ManagerHandler(...args);
    return this.managerHandler;
  }

  createItemStoreHandler(...args) {
    this.itemStoreHandler = this.itemStoreHandler || new ItemStoreHandler(...args);
    return this.itemStoreHandler;
  }

  createManagerStoreHandler(...args) {
    this.managerStoreHandler = this.managerHandler || new ManagerStoreHandler(...args);
    return this.managerStoreHandler;
  }
};

export default HandlerFactory;