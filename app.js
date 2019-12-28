const loader = require('./loaders');

const { vacuum, map } = loader.init();

const main = () => {
  vacuum.move();
  map.print();
};

main();
