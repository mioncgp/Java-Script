// Singelton Pattern
const Singelton = (function () {
  let instance;

  function createInstance() {
    const object = new Object({ name: "Mike" });
    return object;
  }

  // return the same intance
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();
