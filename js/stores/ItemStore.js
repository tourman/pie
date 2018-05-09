'use strict';

import Store from 'stores/Store';
import ItemStoreHandler from '../handlers/ItemStoreHandler';
import managerActions from '../actions/managerActions';

class ItemStore extends Store {
  subscribe() {
    const  changeItem = this.factories.action.createAction('changeItem');
    const endReadItem = this.factories.action.createAction('endReadItem');
    this.model.addListenerOnChange (itemModel => changeItem({itemModel}));
    this.model.addListenerOnEndRead(endReadItem);
  }

  get model() {
    const model = this.factories.model.createItemModel();
    return model;
  }

  get handler() {
    const store = this;
    const handler = this.factories.handler.createItemStoreHandler({store});
    return handler;
  }
};

export default ItemStore;