const Vacuum = require('../src/vacuum');

module.exports = {
  init: map => {
    const vacuum = new Vacuum(map);

    return vacuum;
  }
};
