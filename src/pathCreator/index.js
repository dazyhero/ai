module.exports = class PathCreator {
  constructor(actions, unavailablePoints) {
    this.actions = Object.values(actions);
<<<<<<< HEAD
=======
    this.unavailablePoints = unavailablePoints;
>>>>>>> 54d2c6a31ac71a1255c33793b685b18feef5e92e
  }

  getSuccessors(point, to) {
    const open = [];
    for (let action of this.actions) {
      const newCoords = action.perform(point.coords);
<<<<<<< HEAD
      if (newCoords[0] >= 0 && newCoords[1] >= 0) {
=======
      const unAvailable = this.unavailablePoints.filter(
        x => x[0] === newCoords[0] && x[1] === newCoords[1]
      );
      if (unAvailable.length === 0) {
>>>>>>> 54d2c6a31ac71a1255c33793b685b18feef5e92e
        const newPoint = {
          coords: newCoords,
          g: 0,
          h: 0,
          f: 0
        };
<<<<<<< HEAD

=======
>>>>>>> 54d2c6a31ac71a1255c33793b685b18feef5e92e
        open.push({
          coords: newPoint.coords,
          parent: point
        });
      }
    }
    return open;
  }

  create(from, to) {
    const open = [
      {
        coords: from,
        parent: null,
        g: 0,
        h: 0,
        f: 0
      }
    ];
    const closed = [];

    while (open.length > 0) {
      let current = open.sort((a, b) => a.f - b.f)[0];

      const toClose = open.splice(open.indexOf(current), 1);

      closed.push(toClose);

      const path = [];

      if (current.coords[0] === to[0] && current.coords[1] === to[1]) {
        while (current.parent) {
          path.push(current.coords);
          current = current.parent;
        }
        return path.reverse();
      }

      const successors = this.getSuccessors(current, to);

      successors.forEach(n => {
        for (let node of closed) {
          if (
            node[0].coords[0] === n.coords[0] &&
            node[0].coords[1] === n.coords[1]
          ) {
            return;
          }
        }
        n.g = current.g + 1;
        n.h = (n.coords[0] - to[0]) ** 2 + (n.coords[1] - to[1]) ** 2;
        n.f = n.g + n.h;
        for (let [i, node] of open.entries()) {
          if (
            node.coords[0] === n.coords[0] &&
            node.coords[1] === n.coords[1]
          ) {
            const openNeighbour = open[i];
            if (n.g > openNeighbour.g) {
              return;
            }
          }
        }
        open.push(n);
      });
    }
  }
};
