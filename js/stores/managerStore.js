import Store from './Store';
import dispatcher from '../dispatcher';
import managerStateModel from '../states/managerStateModel';
import managetAct from '../acts/managerAct';

class ManagerStore extends Store {
  getModel() {
    return managerStateModel;
  }

  getAct(type) {
    const act = managetAct[type] || (() => {});
    return act;
  }

  afterReduce() {
    const model = this.getModel();
    model.setBlocked();
    model.setValid();
    model.save();
  }
}

export default new ManagerStore(dispatcher);