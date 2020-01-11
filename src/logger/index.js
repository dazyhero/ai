const fs = require('fs');
const FILE_PATH = './logs';
module.exports = class Logger {
  constructor(map, vacuum) {
    this.map = map;
    this.vacuum = vacuum;
  }

  log() {
    const flatMap = this.map.map.map(el => el.join(''));

    console.log(flatMap.join('\n'));
    console.log(`Dirt left: ${this.map.dirt}`);
    console.log(
      `Dirt ammount to dirt collected: ${100 -
        (this.map.dirt * 100) / this.map.dirtAmmount}`
    );
    console.log(`Moves: ${this.vacuum.history.length}`);
  }

  writeLog(type, iteration, time) {
    const data = JSON.stringify({
      Iteration: iteration,
      'Collected percentage':
        100 - (this.map.dirt * 100) / this.map.dirtAmmount,
      'Energy used': this.vacuum.history.length,
      'Time elapsed': time
    });
    fs.appendFileSync(`${FILE_PATH}/${type}.json`, `${data}\n`);
  }
};
