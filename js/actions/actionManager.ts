import ActionManager from './ActionManager';
import dispatcher from '../dispatcher/dispatcher';

const actionManager = new ActionManager(dispatcher);

export default actionManager;