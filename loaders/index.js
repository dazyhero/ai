const mapLoader = require('./map');
const vacuumLoader = require('./vacuum');
const { EASY } = require('../config');

module.exports = {
  init: () => {
    const map = mapLoader.init(EASY);
    const vacuum = vacuumLoader.init(map);

    return { map, vacuum };
  }
};
