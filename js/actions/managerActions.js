import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';

class ManagerActions {
  addNewItem(item) {
    Dispatcher.dispatch({
      actionType: ActionTypes.ADD_NEW_ITEM,
      item
    });
  }

  changeItem(item, state = {}) {
    Dispatcher.dispatch({
      type: 'changeItem',
      data: {
        item,
        state,
      }
    });
  }

  resetItem() {
    Dispatcher.dispatch({
      type: 'resetItem'
    });
  }

  fetchItem() {
    Dispatcher.dispatch({
      type: 'fetchItem'
    });
  }

  focusItem() {
    Dispatcher.dispatch({
      type: 'focusItem'
    });
  }

  blurItem() {
    Dispatcher.dispatch({
      type: 'blurItem'
    });
  }
}

export default new ManagerActions();