const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.post('/todo', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todo', (req, res) => {
  Todo.find().then((doc) => {
    res.send({
      'todos': doc
    });
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todo/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(400).send();
    }
      res.status(200).send({todo});
  }, (err) => {
      res.status(404).send();
  });
});


app.delete('/todo/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)) {
    console.log('hello');
    return res.status(404).send();
  }
  Todo.findByIdAndRemove(id).then((doc) => {
    if(!doc) {
      return res.status(404).send();
    }
    res.status(200).send({doc});
}).catch((err) => {
    res.status(400).send();
  });
});

app.patch('/todo/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findOneAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if(!todo) {
      return res.status(404).send();
    }
    res.status(200).send({todo});
  }).catch((e) => {
    console.log(e);
    res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
