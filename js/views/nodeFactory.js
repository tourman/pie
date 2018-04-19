import {
  Col,
  Row,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';

class NodeFactory {
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

export default new NodeFactory();