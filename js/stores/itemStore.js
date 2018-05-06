'use strict';

import Store from './Store';
import dispatcher from '../dispatcher';
import itemModel from '../states/itemModel';
import ItemStoreHandler from '../handlers/ItemStoreHandler';

class ItemStore extends Store {
  constructor(...args) {
    super(...args);
  }

  get model() {
    return itemModel;
  }

  get handler() {
    this._handler = this._handler || new ItemStoreHandler(this);
    return this._handler;
  }
};

export default new ItemStore(dispatcher);