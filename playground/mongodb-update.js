// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var url = "mongodb://localhost:27017/Todos";

MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log('Couldn\'t connect to MongoDB Server');
  }
  console.log('Connected to the MongoDB Server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b75e6f6e85679538c836506')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((results) => {
  //   console.log(JSON.stringify(results));
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b76749a922c4d04940622fd')
  }, {
    $set: {
      name: 'Korag Mystic'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  db.close();
});
