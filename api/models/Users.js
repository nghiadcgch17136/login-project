/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const bcrypt = require('bcryptjs');
module.exports = {
  attributes: {
    username:{
      type: 'string',
      unique: true,
      required: true
      
    },
    userpassword:{
      type: 'string',
      required: true
    }
  },
  beforeCreate: function (values,cb){
    const salt = bcrypt.genSaltSync(12);
    bcrypt.hash(values.userpassword, salt,(err,hash) =>{
        if(err) return cb(err);
        values.userpassword = hash;
        cb();
    })
  }
};

