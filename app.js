const loader = require('./loaders');
const chalk = require('chalk');
const actions = require('./src/actions');
const { vacuum, map, logger, path } = loader.init();

const sleep = async () => new Promise(resolve => setTimeout(resolve, 500));

const main = async () => {
  for (let moves of path) {
    console.clear();
    vacuum.move(moves);
    logger.log();
    await sleep();
  }
};

main();
