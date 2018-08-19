const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// Todo.find({
//   '_id': '5b78fc433afda078295baa67'
// }).then((todos) => {
//   console.log(todos);
// });
//
// Todo.findOne({
//   _id: '5b78fc433afda078295baa67'
// }).then((todos) => {
//   console.log(todos);
// });
// var id = 'as5b78fc433afda078295baa67';
// if (!ObjectID.isValid(id)) {
//   console.log('ID is not valid');
// }
//
// Todo.findById(id).then((doc) => {
//   if(!doc) {
//     return console.log('id not found');
//   }
//   console.log(doc);
// }).catch((err) => {
//   console.log(err);
// });

var id = "5b77f8c8954906482a38d4e9";
User.findById(id).then((user) => {
  if (!user) {
    return console.log('User id not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
});
