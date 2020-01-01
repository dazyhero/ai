module.exports = class PathCreator {
  constructor(actions) {
    this.actions = Object.values(actions);
  }

  getLength(pointA, pointB) {
    const length =
      // eslint-disable-next-line prettier/prettier
    Math.sqrt(Math.pow((pointB[0] - pointA[0]), 2) + Math.pow((pointB[1] ** 2 - pointA[1] ** 2), 2));

    return length;
  }

  getSuccessors(point, to) {
    const open = [];
    // console.dir({ point, to });
    for (let action of this.actions) {
      // console.log(point, to);
      const newCoords = action.perform(point.coords);
      if (
        newCoords[0] >= 0 &&
        newCoords[1] >= 0
        // &&
        // newCoords[0] <= 9 &&
        // newCoords[1] <= 4
      ) {
        const newPoint = {
          coords: newCoords,
          g: 0,
          h: 0,
          f: 0
        };
        // const G_COST = this.getLength(newPoint.coords, point.coords);
        // const H_COST = this.getLength(newPoint.coords, to);
        open.push({
          coords: newPoint.coords,
          parent: point
          // g: point.g + G_COST,
          // h: H_COST,
          // f: G_COST + H_COST
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

      // console.log(successors);

      successors.forEach(n => {
        for (let node of closed) {
          if (
            node[0].coords[0] === n.coords[0] &&
            node[0].coords[1] === n.coords[1]
          ) {
            return;
          }
        }
        // if (closed.indexOf(n) !== -1) {
        //   return;
        // }
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

    // if (current[0] === to) return;

    // for (let node of open) {
    // }

    // const current =
    // const current =
    // let prevLenght = this.getLength(from, to);
    // const actions = [];
    // let newFrom = from;
    // while (newFrom !== to) {
    //   for (let action of this.actions) {
    //     const newCoord = action.perform(newFrom);
    //     const newLength = this.getLength(newCoord, to);

    //     if (newLength < prevLenght) {
    //       console.log(newCoord, to);
    //       actions.push(action);
    //       newFrom = newCoord;
    //     }
    //   }
    // }

    // console.log(actions);
  }
};
