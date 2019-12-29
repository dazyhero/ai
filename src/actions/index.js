const fs = require('fs');
const ACTION_PATH = './src/actions';

const isDirectory = dir => {
  return fs.lstatSync(`${ACTION_PATH}/${dir}`).isDirectory();
};

module.exports = (() => {
  const actionsToExport = {};
  const dirs = fs.readdirSync(ACTION_PATH);
  for (let dir of dirs) {
    if (isDirectory(dir)) {
      actionsToExport[dir] = require(`./${dir}`);
    }
  }
  return actionsToExport;
})();
