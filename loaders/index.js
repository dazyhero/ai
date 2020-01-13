const mapLoader = require('./map');
const vacuumLoader = require('./vacuum');
const Logger = require('../src/logger');
const PathFind = require('../src/algorithms/pathFind');
const PathCreator = require('../src/pathCreator');
const actions = require('../src/actions');
const level = require('../config').get(process.env.LEVEL);

module.exports = {
  init: () => {
    const map = mapLoader.init(level);
    const unavailablePoints = map.getCharIndexes('o');
    const vacuum = vacuumLoader.init(map);
    const pathFind = new PathFind(map.dirtCoords);
    const pathCreator = new PathCreator(actions, unavailablePoints);
    const pointPath = [[1, 1]].concat(pathFind.getPath([vacuum.x, vacuum.y]));
    // const path = pointPath;
    // for (let i = 1; i < pointPath.length; i++) {
    //   path.push(pathCreator.create(pointPath[i - 1], pointPath[i]));
    // }
    // let flatPath = path.reduce((accum, cur) => accum.concat(cur), []);
    const logger = new Logger(map, vacuum);
    return { map, vacuum, logger, path: [[1, 1], ...pointPath], pathCreator };
  }
};
