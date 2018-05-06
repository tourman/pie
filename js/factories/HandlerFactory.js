'use strict';

import managerHandler from 'handlers/managerHandler';
import ItemStoreHandler from 'handlers/ItemStoreHandler';
import ManagerStoreHandler from 'handlers/ManagerStoreHandler';

class HandlerFactory {
  createManagerHandler() {
    return managerHandler;
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