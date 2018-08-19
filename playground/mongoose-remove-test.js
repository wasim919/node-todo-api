const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017');

const {Todo} = require('./../server/models/todo');

Todo.findOneAndRemove({
  _id: "5b797351345dafed1ccaa48a"
}).then((doc) => {
  console.log(doc);
})
