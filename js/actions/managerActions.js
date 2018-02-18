import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';

class ManagerActions {
  addNewItem(item) {
    Dispatcher.dispatch({
      actionType: ActionTypes.ADD_NEW_ITEM,
      item
    });
  }

  changeRate(rate) {
    Dispatcher.dispatch({
      type: ActionTypes.changeRate,
      data: {rate}
    });
  }

  changeDescription(description) {
    Dispatcher.dispatch({
      type: ActionTypes.changeDescription,
      data: {description}
    });
  }
}

export default new ManagerActions();