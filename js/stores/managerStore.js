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

  reduce(startingState, action) {
    const state = super.reduce(startingState, action);
    let endingState = this.setBlocked(state);
    Object.freeze(endingState);
    return endingState;
  }

  setBlocked(state) {
    const blocked = this.isBlocked(state);
    const endingState = Object.assign({}, state, {
      blocked
    });
    return endingState;
  }

  isBlocked(state) {
    const emptyDescription = !state.description.length;
    const emptyRate = !state.rate.length;
    const isBlocked = emptyDescription || emptyRate;
    return isBlocked;
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