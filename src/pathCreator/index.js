module.exports = class PathCreator {
  constructor(actions, unavailablePoints) {
    this.actions = Object.values(actions);
  }

  getSuccessors(point, to) {
    const open = [];
    for (let action of this.actions) {
      const newCoords = action.perform(point.coords);
      if (newCoords[0] >= 0 && newCoords[1] >= 0) {
        const newPoint = {
          coords: newCoords,
          g: 0,
          h: 0,
          f: 0
        };
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
    let maxNodes = 0;
    let nodes = 0;
    while (open.length > 0) {
      let current = open.sort((a, b) => a.f - b.f)[0];

      const toClose = open.splice(open.indexOf(current), 1);

      closed.push(toClose);

      const path = [];
      if (open.length + closed.length > maxNodes) {
        maxNodes = open.length + closed.length;
      }
      nodes += open.length + closed.length;
      if (current.coords[0] === to[0] && current.coords[1] === to[1]) {
        while (current.parent) {
          path.push(current.coords);
          current = current.parent;
        }
        return { path: path.reverse(), maxNodes, nodes };
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
