module.exports = class Vacuum {
  constructor(map) {
    this.map = map;
    this.x = 1;
    this.y = 1;
    this.char = 'x';
    this.history = [];
    this.waiting = false;
    this.moves = 0;
  }

  isWaiting() {
    return this.waiting;
  }

  isRepiting([x, y]) {
    let repiting = false;
    if (this.history.length > 1) {
      const tuple = this.history[this.history.length - 2];
      if (tuple[0] === x && tuple[1] === y) repiting = true;
    }

    return repiting;
  }

  updateHistory([x, y]) {
    this.history.push([x, y]);
  }

  setWaiting(wait) {
    this.waiting = wait;
  }

  setPosition([x, y]) {
    this.x = x;
    this.y = y;
    this.updateHistory([x, y]);
  }

  addMoves() {
    ++this.moves;
  }

  performAction(action) {
    const newPosition = action.perform([this.x, this.y]);
    if (this.map.isLegalPlace(newPosition)) {
      this.addMoves();
      this.setWaiting(false);
      this.map.setChar(this.x, this.y, this.char);
      this.setPosition(newPosition);
    }
  }

  move([x, y]) {
    // const newPosition = action.perform(this.x, this.y);
    this.map.setChar(x, y, this.char);
    this.setPosition([x, y]);
    // if (!this.isRepiting(newPosition) && this.map.isLegalPlace(newPosition)) {
    //   this.addMoves();
    //   this.setWaiting(false);
    //   this.map.setChar(this.x, this.y, this.char);
    //   this.setPosition(newPosition);
    // } else {
    //   this.setWaiting(true);
    // }
  }
};
