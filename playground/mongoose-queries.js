const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5949e7d87c5bab915bb7790511';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found')
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var id = '594823abd69702b149fa41af';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('Id not found');
  }

  console.log('User by Id', user);
}).catch((e) => console.log(e));
