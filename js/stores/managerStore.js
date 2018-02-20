import Store from '../utils/Store';
import dispatcher from '../dispatcher';

class ManagerStore extends Store {
  getInitialState() {
    return Object.freeze({
      title       : 'Try to add an item',
      description : '',
      rate        : '',
      blocked     : true
    });
  }

  'act.changeItem'(startingState, {item}) {
    const endingState = Object.assign({}, startingState, item);
    endingState.rate = endingState.rate.replace(/\D/g, '');
    return endingState;
  }

  'act.resetItem'(startingState) {
    const endingState = Object.assign({}, startingState, {
      description : '',
      rate        : ''
    });
    return endingState;
  }
}

export default new ManagerStore(dispatcher);