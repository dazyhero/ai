const loader = require('./loaders');
const chalk = require('chalk');
const actions = require('./src/actions');
const Reader = require('./src/logger/reader');
const sleep = async () => new Promise(resolve => setTimeout(resolve, 0));

const pathFind = async () => {
  for (let i = 0; i < 100; i++) {
    const startTime = new Date().getTime();

<<<<<<< HEAD
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
  await pathFind();
  await random();
=======
const main = async () => {
  for (let moves of path) {
    console.clear();
    vacuum.move(moves);
    logger.log();
    await sleep();
  }
>>>>>>> 54d2c6a31ac71a1255c33793b685b18feef5e92e
};

main();
