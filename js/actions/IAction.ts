import IState from '../states/IState';
import IActionHandler from './IActionHandler';

interface IAction {
  data: any;
  act(handler: IActionHandler, startingState: IState): IState;
}

export default IAction;