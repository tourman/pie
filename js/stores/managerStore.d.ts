import { IManagerState } from '../states/manager';

export const managerStore: {
  getState(): IManagerState,
  addListener(callback: (state: {}) => void): {remove: Function}
};
export default managerStore;