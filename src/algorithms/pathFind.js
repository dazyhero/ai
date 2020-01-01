module.exports = class PathFind {
  constructor(dirtCoords) {
    this.dirtCoords = dirtCoords;
    this.path = [];
  }

  getLength(pointA, pointB) {
    const length =
      // eslint-disable-next-line prettier/prettier
      Math.sqrt(Math.pow((pointB[0] - pointA[0]), 2) + Math.pow((pointB[1] ** 2 - pointA[1] ** 2), 2));

    return length;
  }

  getPath(fromPoint) {
    let closestPoint = [undefined, undefined];
    if (this.dirtCoords.length !== 0) {
      let length = 1000;
      this.dirtCoords.forEach(point => {
        const curLength = this.getLength(fromPoint, point);
        if (curLength < length) {
          closestPoint = point;
          length = curLength;
        }
      });
      this.dirtCoords.forEach((p, i) => {
        if (p[0] === closestPoint[0] && p[1] === closestPoint[1]) {
          this.path.push(p);
          this.dirtCoords.splice(i, 1);
        }
      });
      this.getPath(closestPoint);
    }
    return this.path;
  }
};
