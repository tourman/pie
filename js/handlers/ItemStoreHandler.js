'use strict';

class ItemStoreHandler {
  constructor({store}) {
    this.store = store;
  }

  setItem({item}) {
    this.store.model.set(item);
  }

  resetItem() {
    this.store.model.set({
      description : '',
      rate        : '',
    });
  }
}

export default ItemStoreHandler;