module.exports = class BFS {
  constructor(map) {
    this.map = map;
    this.visited = [];
  }

  init() {
    for (let i = 0; i < this.map.length; i++) {
      this.visited.push([]);
    }

    // console.log(this.map[0][0]);

    this.map.forEach((x, i) => {
      x.forEach((_, j) => {
        if (this.map[i][j] === 'o') {
          this.visited[i][j] = true;
        } else {
          this.visited[i][j] = false;
        }
      });
    });
  }

  getPath(source, dest) {
    this.init();
    this.visited[source[0]][source[1]] = true;
    const queue = [{ node: source, parent: null }];

    let queueMaxSize = 1;
    let queueSize = 1;

    let res = {};

    while (queue.length !== 0) {
      if (queue.length > queueMaxSize) {
        queueMaxSize = queue.length;
      }
      queueSize += queue.length;
      let current = queue.shift();
      if (current.node[0] === dest[0] && current.node[1] === dest[1]) {
        return { queueMaxSize, queueSize };
      }

      if (
        current.node[0] - 1 >= 0 &&
        this.visited[current.node[0] - 1][current.node[1]] === false
      ) {
        queue.push({
          node: [current.node[0] - 1, current.node[1]],
          parent: current
        });
        this.visited[current.node[0]][current.node[1]] = true;
      }

      if (
        current.node[0] + 1 < this.map.length &&
        this.visited[current.node[0] + 1][current.node[1]] === false
      ) {
        queue.push({
          node: [current.node[0] + 1, current.node[1]],
          parent: current
        });
        this.visited[current.node[0]][current.node[1]] = true;
      }

      if (
        current.node[1] - 1 >= 0 &&
        this.visited[current.node[0]][current.node[1] - 1] === false
      ) {
        queue.push({
          node: [current.node[0], current.node[1] - 1],
          parent: current
        });
        this.visited[current.node[0]][current.node[1]] = true;
      }

      if (
        current.node[1] + 1 < this.map[0].length &&
        this.visited[current.node[0]][current.node[1] + 1] === false
      ) {
        queue.push({
          node: [current.node[0], current.node[1] + 1],
          parent: current
        });
        this.visited[current.node[0]][current.node[1]] = true;
      }
    }
  }
};
