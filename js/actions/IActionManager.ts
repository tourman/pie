import { Dispatcher } from 'flux';
import IAction from './IAction';

export default interface IActionManager {
  dispatcher: Dispatcher<IAction>;
  act(action: IAction): IActionManager;
};