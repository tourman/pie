import IState from '../states/IState';
import IActionHandler from './IActionHandler';
import IChangeItemData from './IChangeItemData';

interface IChangeItemActionHandler extends IActionHandler {
  actChangeItem(startingState: IState, data: IChangeItemData): IState;
}

export default IChangeItemActionHandler;