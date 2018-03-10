import IState from './IState';

interface IManagerState extends IState {
  title       : string;
  description : string;
  rate        : string;
  valid       : boolean;
  focus       : boolean;
  blocked     : boolean;
};

export default IManagerState;