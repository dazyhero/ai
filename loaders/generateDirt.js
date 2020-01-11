//TODO: pass map width and height as props
module.exports = class GenerateDirt {
  constructor(map) {
    this.map = map;
  }

  _random(ammount) {
    const coords = [];
    let repeated = false;
    for (let i = 0; i < ammount; i++) {
      const randomCoords = [
        Math.floor(Math.random() * 5) + 1,
        Math.floor(Math.random() * 10) + 1
      ];
      coords.forEach(x => {
        if (
          (randomCoords[0] === x[0] && randomCoords[1] === x[1]) ||
          (randomCoords[0] === x[0] && randomCoords[1] === x[1])
        ) {
          repeated = true;
        }
      });
      if (repeated) {
        return this._random(ammount);
      }
      if (this.map.isLegalPlace([randomCoords[0], randomCoords[1]])) {
        coords.push(randomCoords);
      }
    }
    if (coords.length < ammount) {
      return this._random(ammount);
    }
    return coords;
  }

  generate(ammount) {
    const coords = this._random(ammount);
    return coords;
  }
};
