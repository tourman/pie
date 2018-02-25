import managerActions from '../../actions/managerActions';
import wrapFocus from '../wrapFocus';
import DescriptionInputWithoutFocus from './DescriptionInputWithoutFocus';

const DescriptionInput = wrapFocus(
  DescriptionInputWithoutFocus,
  {
    onFocus : managerActions.focusItem,
    onBlur  : managerActions.blurItem
  }
);

export default DescriptionInput;