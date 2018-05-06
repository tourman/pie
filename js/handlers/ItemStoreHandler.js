'use strict';

class ItemStoreHandler {
  constructor({model}) {
    this.model = model;
  }

  setItem({item}) {
    this.model.set(item);
  }

  resetItem() {
    this.model.set({
      description : '',
      rate        : '',
    });
  }
}

export default ItemStoreHandler;