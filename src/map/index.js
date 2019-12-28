const BoundaryError = require('../../errors/BoundaryError');

module.exports = class Map {
  constructor(map) {
    this.map = map;
  }

  isLegalPlace(x, y) {
    return this.map[x][y] !== 'o';
  }

  getCharIndex(char) {
    let index = [undefined, undefined];
    for (let i = 1; i < this.map.length; i++) {
      for (let j = 1; j < this.map[i].length; j++) {
        if (this.map[i][j] === char) index = [i, j];
      }
    }
    return index;
  }

  clearChar(char) {
    const [x, y] = this.getCharIndex(char);
    if (x && y) {
      this.map[x][y] = '-';
    }
  }

  setChar(x, y, char) {
    if (!this.isLegalPlace(x, y)) {
      throw new BoundaryError(`Positon [${x}, ${y}] is illegal`);
    }
    this.clearChar(char);
    this.map[x][y] = char;
  }

  print() {
    const flatMap = this.map.map(el => el.join(''));

    console.log(flatMap.join('\n'));
  }
};
