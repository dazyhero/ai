const mapLoader = require('./map');
const vacuumLoader = require('./vacuum');
const level = require('../config').get(process.env.LEVEL);
console.log(level);
module.exports = {
  init: () => {
    const map = mapLoader.init(level);
    const vacuum = vacuumLoader.init(map);
    return { map, vacuum };
  }
};
