const loader = require('./loaders');
const chalk = require('chalk');

const { vacuum, map } = loader.init();

const main = () => {
  console.clear();
  setInterval(() => {
    try {
      console.clear();
      vacuum.move();
      map.print();
    } catch (e) {
      console.log(chalk.red(e.message));
      process.exit(1);
    }
  }, 500);
};

main();
