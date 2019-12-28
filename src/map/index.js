const BoundaryError = require('../../errors/BoundaryError');

module.exports = class Map {
  constructor(map) {
    this.map = map;
  }

  isLegalPlace(x, y) {
    return this.map[x][y] !== 'o';
  }

  setChar(x, y, char) {
    if (!this.isLegalPlace(x, y)) {
      throw new BoundaryError(`Positon [${x}, ${y}] is illegal`);
    }
    this.map[x][y] = char;
  }

  print() {
    const flatMap = this.map.map(el => el.join(''));

    console.log(flatMap.join('\n'));
  }
};
