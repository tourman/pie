import Store from './Store';
import dispatcher from '../dispatcher';
import autobind from 'autobind-decorator';
import utils from '../utils/common';

class ManagerStore extends Store {
  getInitialState() {
    let initialState = {
      title       : 'Try to add an item',
      description : '',
      rate        : '',
      valid       : true,
      focus       : true,
      blocked     : true
    };
    initialState = this.freeze(initialState);
    return initialState;
  }

  afterReduce(startingState, action) {
    let endingState = startingState;
    endingState = this.setBlocked(endingState);
    endingState = this.setValid(endingState);
    return endingState;
  }

  setBlocked(state) {
    const blocked = this.isBlocked(state);
    const endingState = utils.cloneWithMerge(state, {
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
    const endingState = utils.cloneWithMerge(state, {
      valid
    });
    return endingState;
  }

  isValid(state) {
    const valid = utils.isStringAPositiveIntegerOrZero(state.rate);
    return valid;
  }

  @autobind
  'act.changeItem'(startingState, {item}) {
    const endingState = utils.cloneWithMerge(startingState, item);
    return endingState;
  }

  @autobind
  'act.resetItem'(startingState) {
    const endingState = utils.cloneWithMerge(startingState, {
      focus       : true,
      description : '',
      rate        : ''
    });
    return endingState;
  }

  @autobind
  'act.focusItem'(startingState) {
    const endingState = utils.cloneWithMerge(startingState, {
      focus       : true
    });
    return endingState;
  }

  @autobind
  'act.blurItem'(startingState) {
    const endingState = utils.cloneWithMerge(startingState, {
      focus       : false
    });
    return endingState;
  }
}

export default new ManagerStore(dispatcher);