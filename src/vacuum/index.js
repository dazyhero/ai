module.exports = class Vacuum {
  constructor(map) {
    this.map = map;
    this.x = 1;
    this.y = 1;
    this.char = 'X';
  }

  move(direction) {
    this.x += 1;
    this.map.setChar(this.x, this.y, this.char);
  }
};
