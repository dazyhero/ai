const loader = require('./loaders');
const chalk = require('chalk');
const actions = require('./src/actions');
const { vacuum, map } = loader.init();

const sleep = async () => new Promise(resolve => setTimeout(resolve, 500));

const main = async () => {
  for (let i = 0; i < 1000; i++) {
    console.clear();
    try {
      console.clear();
      const rndActionIndex = Math.floor(Math.random() * 4);
      const rndAction = Object.values(actions)[rndActionIndex];
      vacuum.move(rndAction);
      map.print();
      if (!vacuum.isWaiting()) await sleep();
    } catch (e) {
      console.log(chalk.red(e.message));
      process.exit(1);
    }
  }
};

main();

// for (let i = 0; i < 100; i++) {
//     await sleep();
//     main();
// }
