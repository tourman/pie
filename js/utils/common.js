'use strict';

import extend from 'lodash/extend';
import uniq from 'lodash/uniq';
import flatten from 'lodash/flatten';
import zipObject from 'lodash/zipObject';

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
  },

  keys(...objects) {
    const allKeys = objects.map(obj => Object.keys(obj));
    const flattenKeys = flatten(allKeys);
    const keys = uniq(flattenKeys);
    return keys;
  },

  differentKeys(...objects) {
    const keys = common.keys(...objects);
    const differentKeys = keys.filter(key => {
      const map = objects.map(obj => obj[key]);
      const uniqueMap = uniq(map);
      const different = uniqueMap.length > 1;
      return different;
    });
    return differentKeys;
  },

  equal(...objects) {
    const differentKeys = common.differentKeys(...objects);
    const equal = !differentKeys.length;
    return equal;
  },

  zipObject,
};

export default common;