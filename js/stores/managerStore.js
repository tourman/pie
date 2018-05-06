import Store from './Store';
import dispatcher from '../dispatcher';
import managerDataModel from '../states/managerDataModel';
import managerStateModel from '../states/managerStateModel';
import managerActions from '../actions/managerActions';
import autobind from 'autobind-decorator';
import managerModel from '../states/managerModel';

class ManagerStore extends Store {
  constructor(...args) {
    super(...args);
  }

  get dataModel() {
    return managerDataModel;
  }

  get stateModel() {
    return managerStateModel;
  }

  get actions() {
    return managerActions;
  }

  get managerAct() {
    this._managerAct = this._managerAct || new ManagerAct(this);
    return this._managerAct;
  }

  get handler() {
    const handler = this.factories.handler.createManagerStoreHandler(this);
    return handler;
  }

  get model() {
    return managerModel;
  }

  getInnerState() {
    if (!this.innerState) {
      this.setInnerState();
      this.dataModel .addListenerOnChange(this.setInnerState);
      this.stateModel.addListenerOnChange(this.setInnerState);
    }
    return this.innerState;
  }

  @autobind
  setInnerState() {
    this.innerState = {
      ...this.dataModel .get(),
      ...this.stateModel.get(),
    };
    return this;
  }

  getAct(type) {
    const act = this.managerAct[type] || (() => {});
    return act;
  }
}

export default new ManagerStore(dispatcher);