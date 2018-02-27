import {
  Col,
  Row,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';

class GridFactory {
  createCol() {
    return Col;
  }

  createRow() {
    return Row;
  }

  createFormGroup() {
    return FormGroup;
  }

  createFormControl() {
    return FormControl;
  }

  createButton() {
    return Button;
  }
}

export default new GridFactory();