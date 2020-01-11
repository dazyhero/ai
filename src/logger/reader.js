const fs = require('fs');
module.exports = class Reader {
  constructor(filePath) {
    this.filePath = filePath;
  }

  getAvg(data, field) {
    return (
      data.reduce((accum, cur) => {
        return accum + cur[field];
      }, 0) / data.length
    );
  }

  getStats(data) {
    const stats = {};
    stats['Collected percentage avg'] = this.getAvg(
      data,
      'Collected percentage'
    );
    stats['Energy used avg'] = this.getAvg(data, 'Energy used');
    stats['Time elapsed avg'] = this.getAvg(data, 'Time elapsed');

    return stats;
  }

  async read() {
    const fileRaw = fs.readFileSync(this.filePath, 'utf-8');
    const file = fileRaw
      .split('\n')
      .filter(x => x.length > 0)
      .map(x => JSON.parse(x));
    console.log(this.getStats(file));
  }
};
