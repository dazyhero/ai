const config = require('./maps');

exports.get = key => config[key];
