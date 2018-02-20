import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';

class ManagerActions {
  addNewItem(item) {
    Dispatcher.dispatch({
      actionType: ActionTypes.ADD_NEW_ITEM,
      item
    });
  }

  changeItem(item) {
    Dispatcher.dispatch({
      type: ActionTypes.changeItem,
      data: {item}
    });
  }

  resetItem() {
    Dispatcher.dispatch({
      type: ActionTypes.resetItem
    });
  }
}

export default new ManagerActions();