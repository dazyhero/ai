module.exports = class Logger {
  constructor(map, vacuum) {
    this.map = map;
    this.vacuum = vacuum;
  }

  log() {
    const flatMap = this.map.map.map(el => el.join(''));

    console.log(flatMap.join('\n'));
    console.log(`Dirt left: ${this.map.dirt}`);
    console.log(`Dirt coords: ${this.map.dirtCoords}`);
    console.log(`Moves: ${this.vacuum.moves}`);
  }
};
