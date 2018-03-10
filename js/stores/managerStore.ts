import Store from '../utils/Store';
import dispatcher from '../dispatcher';
import autobind from 'autobind-decorator';
import utils from '../utils/common';
import IChangeItemActionHandler from '../actions/IChangeItemActionHandler';
import IChangeItemData from '../actions/IChangeItemData';
import IManagerState from '../states/IManagerState';

class ManagerStore extends Store <IManagerState> implements IChangeItemActionHandler {
  getInitialState(): IManagerState {
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

  afterReduce(startingState: IManagerState) {
    let endingState = startingState;
    endingState = this.setBlocked(endingState);
    endingState = this.setValid(endingState);
    return endingState;
  }

  setBlocked(state: IManagerState): IManagerState {
    const blocked = this.isBlocked(state);
    const endingState = utils.cloneWithMerge(state, {
      blocked
    });
    return endingState;
  }

  isBlocked(state: IManagerState): boolean {
    const emptyDescription = !state.description.length;
    const emptyRate = !state.rate.length;
    const invalid = !this.isValid(state);
    const blocked = emptyDescription || emptyRate || invalid;
    return blocked;
  }

  setValid(state: IManagerState): IManagerState {
    const valid = this.isValid(state);
    const endingState = utils.cloneWithMerge(state, {
      valid
    });
    return endingState;
  }

  isValid(state: IManagerState): boolean {
    const valid = utils.isStringAPositiveIntegerOrZero(state.rate);
    return valid;
  }

  @autobind
  actChangeItem(startingState: IManagerState, data: IChangeItemData) {
    const itemPart = {
      [data.type]: data.event.target.value
    };
    const endingState = utils.cloneWithMerge(startingState, itemPart);
    return endingState;
  }

  /*
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
  */
}

export default new ManagerStore(dispatcher);