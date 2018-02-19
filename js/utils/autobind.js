export default (self, method, ...methods) => {
  if (Array.isArray(method)) {
    methods = method;
  } else {
    methods = [method, ...methods];
  }

  methods.forEach(
    method => self[method] = self[method].bind(self)
  );
}