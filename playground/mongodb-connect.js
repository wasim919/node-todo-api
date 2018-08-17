// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var url = "mongodb://localhost:27017/Todos";

MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log('Couldn\'t connect to MongoDB Server');
  }
  console.log('Connected to the MongoDB Server');

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
