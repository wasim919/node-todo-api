// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var url = "mongodb://localhost:27017/Todos";

MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log('Couldn\'t connect to MongoDB Server');
  }
  console.log('Connected to the MongoDB Server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b766dd2922c4d0494062265')
  // }).toArray().then((docs) => {
  //   console.log('Todos:');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos');
  // });

  db.collection('Users').find({
    name: 'Andrew'
  }).toArray().then((docs) => {
    console.log('Users having name Andrew');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Users', err);
  });

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b766dd2922c4d0494062265')
  // }).count().then((count) => {
  //   console.log('Todos count: ', count);
  // }, (err) => {
  //   console.log(err);
  // });
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: "Andrew Mead",
  //   age: 25,
  //   location: "Philadelphia, USA"
  // }, (err, result) => {
  //     if (err) {
  //       return console.log('Couldn\'t insert into Users collection ', err);
  //     }
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.close();
});
