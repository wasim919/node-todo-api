const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({
//   "_id": "5b797351345dafed1ccaa48a"
// }).then((doc) => {
//   console.log(doc);
// });
//
Todo.findByIdAndRemove('5b797351345dafed1ccaa48a').then((doc) => {
  console.log(doc);
}).catch((err) => {
  console.log('hello');
  console.log(err);
});
