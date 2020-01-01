const loader = require('./loaders');
const chalk = require('chalk');
const actions = require('./src/actions');
const { vacuum, map, logger, path } = loader.init();

const sleep = async () => new Promise(resolve => setTimeout(resolve, 500));

const main = async () => {
  // path.filter(x => x !== undefined);
  for (let moves of path) {
    console.clear();
    vacuum.move(moves);
    logger.log();
    await sleep();
  }
  // for (let i = 0; i < 1000; i++) {
  //   console.clear();
  //   try {
  //     console.clear();
  //     // const rndActionIndex = Math.floor(Math.random() * 4);
  //     // const rndAction = Object.values(actions)[rndActionIndex];
  //     // vacuum.move(rndAction);
  //     // logger.log();
  //     // if (!vacuum.isWaiting()) await sleep();
  //   } catch (e) {
  //     console.log(e);
  //     process.exit(1);
  //   }
  // }
};

main();
