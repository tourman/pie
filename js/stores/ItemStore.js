'use strict';

import Store from 'stores/Store';
import ItemStoreHandler from '../handlers/ItemStoreHandler';
import managerActions from '../actions/managerActions';

class ItemStore extends Store {
  subscribe() {
    this.model.addListenerOnChange(itemModel => managerActions.changeItem({itemModel}));
  }

  get model() {
    const model = this.factories.model.createItemModel();
    return model;
  }

  get handler() {
    const handler = this.factories.handler.createItemStoreHandler(this);
    return handler;
  }
};

export default ItemStore;