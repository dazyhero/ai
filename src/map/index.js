module.exports = class Map {
  constructor(map) {
    this.map = map;
    this.dirt = 0;
    this.dirtCoords = [];
  }

  isLegalPlace([x, y]) {
    return this.map[x][y] !== 'o';
  }

  setDirtCoords(coords) {
    this.dirtCoords = coords;
  }

  removeDirtCoords([x, y]) {
    this.dirtCoords = this.dirtCoords.filter(d => d[0] !== x && d[1] !== y);
  }

  removeDirt() {
    --this.dirt;
  }

  setDirt(ammount) {
    this.dirt = ammount;
  }

  getCharIndexes(char) {
    let indexes = [];

    for (let i = 1; i < this.map.length; i++) {
      for (let j = 1; j < this.map[i].length; j++) {
        if (this.map[i][j] === char) indexes.push([i, j]);
      }
    }

    return indexes;
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

  isDirt([x, y]) {
    return this.map[x][y] === '#';
  }

  clearChar(char) {
    const [x, y] = this.getCharIndex(char);
    if (x && y) {
      this.map[x][y] = '-';
    }
  }

  setChar(x, y, char) {
    if (this.isDirt([x, y])) {
      this.removeDirtCoords([x, y]);
      this.removeDirt();
    }
    this.clearChar(char);
    this.map[x][y] = char;
  }
};
