'use strict';

import modelFactory from '../models/LocalStorageModelFactory';
import utils from '../utils/common';

const Model = modelFactory('managerData');

class ManagerDataModel extends Model {
  defaultsToExtend() {
    const defaults = {
      description : '',
      rate        : '',
    };
    return defaults;
  }

  validate({rate}) {
    const valid = utils.isStringAPositiveIntegerOrZero(rate);
    const validationError = valid ? '' : 'Invalid rate';
    return validationError;
  }

  isBlocked({rate, description} = this.get()) {
    const emptyDescription = !description.length;
    const emptyRate = !rate.length;
    const invalid = !this.isValid();
    const blocked = emptyDescription || emptyRate || invalid;
    return blocked;
  }
};

export default new ManagerDataModel();