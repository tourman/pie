import Store from '../utils/Store';
import dispatcher from '../dispatcher';
import autobind from 'autobind-decorator';

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
    const endingState = this.extend(state, {
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
    const endingState = this.extend(state, {
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

  @autobind
  'act.changeItem'(startingState, {item}) {
    const endingState = this.extend(startingState, item);
    //endingState.rate = endingState.rate.replace(/\D/g, '');
    return endingState;
  }

  @autobind
  'act.resetItem'(startingState) {
    const endingState = this.extend(startingState, {
      focus       : true,
      description : '',
      rate        : ''
    });
    return endingState;
  }

  @autobind
  'act.focusItem'(startingState) {
    const endingState = this.extend(startingState, {
      focus       : true
    });
    return endingState;
  }

  @autobind
  'act.blurItem'(startingState) {
    const endingState = this.extend(startingState, {
      focus       : false
    });
    return endingState;
  }
}

export default new ManagerStore(dispatcher);