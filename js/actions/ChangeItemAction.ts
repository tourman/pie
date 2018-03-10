import Action from './Action';
import IChangeItemActionHandler from './IChangeItemActionHandler';
import IChangeItemData from './IChangeItemData';
import IState from '../states/IState';

class ChangeItemAction extends Action {
  constructor(public data: IChangeItemData) {
    super(data);
  }

  act(handler: IChangeItemActionHandler, startingState: IState): IState {
    const endingState: IState = handler.actChangeItem(startingState, this.data);
    return endingState;
  }
}

export default ChangeItemAction;