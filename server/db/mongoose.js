const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://tars:Tars@@ds125402.mlab.com:25402/todo332');

module.exports = {mongoose};
