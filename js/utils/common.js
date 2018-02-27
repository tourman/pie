export default {
  freeze(obj) {
    const frozenObj = {...obj};
    Object.freeze(frozenObj);
    return frozenObj;
  }
};