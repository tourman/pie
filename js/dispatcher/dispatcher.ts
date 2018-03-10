import { Dispatcher } from 'flux';
import IAction from '../actions/IAction';

const dispatcher = new Dispatcher<IAction>();

export default dispatcher;