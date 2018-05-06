'use strict';

import managerHandler from 'handlers/managerHandler';
import ItemStoreHandler from 'handlers/ItemStoreHandler';

class HandlerFactory {
  createManagerHandler() {
    return managerHandler;
  }

  createItemStoreHandler(...args) {
    this.itemStoreHandler = this.itemStoreHandler || new ItemStoreHandler(...args);
    return this.itemStoreHandler;
  }
};

export default HandlerFactory;