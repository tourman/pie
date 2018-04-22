'use strict';

import extend from 'lodash/extend';

const common = {
  freeze(obj) {
    const frozenObj = {...obj};
    Object.freeze(frozenObj);
    return frozenObj;
  },

  /**
   * See unit tests: https://regex101.com/r/1yQnCf/1
   */
  isStringAPositiveIntegerOrZero(value) {
    const valid = /^(0?|[1-9]\d*)$/.test(value);
    return valid;
  },

  cloneAndExtend(...objects) {
    const obj = extend({}, ...objects);
    return obj;
  }
};

export default common;