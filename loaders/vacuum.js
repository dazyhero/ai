const Vacuum = require('../src/vacuum');

module.exports = {
  init: map => {
    const Vacuum = require('./src/vacuum');
    const vacuum = new Vacuum(map);

    return vacuum;
  }
};
