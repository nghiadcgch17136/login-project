/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
module.exports = {
    createUser: (req,res) => {
        const {username,userpassword} = req.body;
        const salt = bcrypt.genSaltSync(12);
        let hashPassword = bcrypt.hash(userpassword, salt);
        Users.create({username,userpassword : hashPassword}).exec((err,user) =>{
            if(err) throw err;
            else {
                res.send("Create success");
            }
        })
    },
    getProfile: (req,res) =>{
        const {userid} = req.tokenInfor;
            Users.findOne({id : userid}).exec((err,user) =>{
                if(err) throw err;
                res.send(JSON.stringify(user));
            }, trace => {console.log(trace)})
        
    },
};

