import Store from '../utils/Store';
import dispatcher from '../dispatcher';

class ManagerStore extends Store {
  getInitialState() {
    return Object.freeze({
      title       : 'Try to add an item',
      description : '',
      rate        : '',
      valid       : true,
      blocked     : true
    });
  }

  reduce(startingState, action) {
    let endingState = super.reduce(startingState, action);
    endingState = this.setBlocked(endingState);
    endingState = this.setValid(endingState);
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
    const invalid = !this.isValid(state);
    const blocked = emptyDescription || emptyRate || invalid;
    return blocked;
  }

  setValid(state) {
    const valid = this.isValid(state);
    const endingState = Object.assign({}, state, {
      valid
    });
    return endingState;
  }

  /**
   * See unit tests: https://regex101.com/r/1yQnCf/1
   */
  isValid(state) {
    const valid = state.rate.match(/^(0?|[1-9]\d*)$/);
    return valid;
  }

  'act.changeItem'(startingState, {item}) {
    const endingState = Object.assign({}, startingState, item);
    //endingState.rate = endingState.rate.replace(/\D/g, '');
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