var LooksSameAdaptor = require('./lib/looks-same.js');

LooksSameAdaptor.interfaces = {
  differ: require('./lib/interfaces/differ.js'),
};

module.exports = LooksSameAdaptor;
