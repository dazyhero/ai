const fs = require('fs');
const WIDTH = 12;
const Map = require('../src/map');

module.exports = {
  get: mapPath => {
    const map = fs
      .readFileSync(mapPath, 'utf-8')
      .split('')
      .filter(s => s !== '\n');
    const map2d = [];
    while (map.length) map2d.push(map.splice(0, WIDTH));
    return map2d;
  },
  init: level => {
    const map2d = this.get(level);
    const map = new Map(map2d);
    return map;
  }
};