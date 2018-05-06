'use strict';

import Store from 'stores/Store';
import ItemStoreHandler from '../handlers/ItemStoreHandler';
import managerActions from '../actions/managerActions';

class ItemStore extends Store {
  subscribe() {
    this.model.addListenerOnChange(item => managerActions.changeItem({item}));
  }

  get model() {
    const model = this.factories.model.createItemModel();
    return model;
  }

  get handler() {
    this._handler = this._handler || new ItemStoreHandler(this);
    return this._handler;
  }
};

export default ItemStore;