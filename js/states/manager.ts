import { IState } from './IState';

export interface IManagerState extends IState {
  title       : string;
  description : string;
  rate        : string;
  valid       : boolean;
  focus       : boolean;
  blocked     : boolean;
}