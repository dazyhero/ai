const loader = require('./loaders');
const chalk = require('chalk');
const actions = require('./src/actions');
const Reader = require('./src/logger/reader');
const sleep = async () => new Promise(resolve => setTimeout(resolve, 0));
const BFS = require('./src/algorithms/BFS/bfs');

const bfs = () => {
  // let aStarTime = 0;
  // let bfsTime = 0;
  for (let i = 0; i < 20; i++) {
    const { map, path, pathCreator } = loader.init();
    let furthest = [0, 0];
    let furthestLength = 0;
    path.forEach(x => {
      const curLength = Math.sqrt(
        Math.pow(x[0] - furthest[0], 2) + Math.pow(x[1] - furthest[1], 2)
      );
      if (curLength > furthestLength) {
        furthest = x;
        furthestLength = curLength;
      }
    });
    const aStarStartTime = process.hrtime();
    const { maxNodes, nodes } = pathCreator.create(path[0], furthest);
    const aStarTime = process.hrtime(aStarStartTime);
    // const aStarcomputeTime = aStarendTime - aStarStartTime;
    // console.log(aStarcomputeTime);
    console.log({ aStarcomputeTime: aStarTime[1] / 1000000, maxNodes, nodes });
    // aStarTime += aStarcomputeTime / 1000;

    const startTime = process.hrtime();
    const bfs = new BFS(map.map);
    const { queueMaxSize, queueSize } = bfs.getPath(path[0], furthest);
    const time = process.hrtime(startTime);
    // const computeTime = endTime - startTime;
    console.log({ computeTime: time[1] / 1000000, queueMaxSize, queueSize });
    // bfsTime += computeTime / 1000;
  }

  // console.log(aStarTime, bfsTime);
  // console.log(aStarTime / 20, bfsTime / 20);
};

const pathFind = async () => {
  for (let i = 0; i < 100; i++) {
    const startTime = new Date().getTime();

    const { vacuum, logger, path } = loader.init();
    for (let moves of path) {
      // console.clear();
      vacuum.move(moves);
      // logger.log();
      await sleep();
    }
    const endTime = new Date().getTime();
    const computeTime = endTime - startTime;
    logger.writeLog('pathFind', i, computeTime);
  }
  const reader = new Reader('./logs/pathFind.json');
  await reader.read();
};

const random = async () => {
  for (let i = 0; i <= 100; i++) {
    const startTime = new Date().getTime();
    const { vacuum, logger } = loader.init();
    for (let i = 0; i <= 100; i++) {
      const actionMoves = Object.values(actions);
      const randomMove = Math.floor(Math.random() * (actionMoves.length - 1));
      // console.clear();
      vacuum.performAction(actionMoves[randomMove]);
      // logger.log();
      await sleep();
    }
    const endTime = new Date().getTime();
    const computeTime = endTime - startTime;
    logger.writeLog('random', i, computeTime);
  }
  const reader = new Reader('./logs/random.json');
  await reader.read();
};

const main = async () => {
  bfs();
  // await pathFind();
  // await random();
};

main();
