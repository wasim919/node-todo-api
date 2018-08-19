const {MongoClient, ObjectID} = require('mongodb');

url = 'mongodb://localhost:27017/Todos';
MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }

  console.log('Connected to MongoDB Server');

  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  //
  // db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteOne({name: 'Andrew'}).then((result) => {
  //   console.log(result);
  // });
  //
  // db.collection('Users').findOneAndDelete({_id: new ObjectID('5b767465922c4d04940622f1')}).then((result) => {
  //   console.log(result);
  // });

  //db.close();
});
