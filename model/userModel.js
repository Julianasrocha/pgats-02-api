// In-memory database
//const bcrypt = require('bcryptjs');

// In-memory user database
const users = [
  {
    username: 'pedro', 
    //password: bcrypt.hashSync('123456', 8), 
    favorecidos: [ 'juliana' ], 
    saldo: 10000
  },
  {
    username: 'juliana', 
   // password: bcrypt.hashSync('123456', 8), 
    favorecidos: [ 'pedro' ], 
    saldo: 10000
  }
];

module.exports = {
  users
};