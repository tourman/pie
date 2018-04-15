import _ from 'downline';

export default {
  freeze(obj) {
    const frozenObj = {...obj};
    Object.freeze(frozenObj);
    return frozenObj;
  },

  /**
   * See unit tests: https://regex101.com/r/1yQnCf/1
   */
  isStringAPositiveIntegerOrZero(value) {
    const valid = value.match(/^(0?|[1-9]\d*)$/);
    return valid;
  },

  cloneAndExtend(...objects) {
    const obj = _.cloneAndExtend(...objects);
    return obj;
  }
};