const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
module.exports = {
    
    login: (req,res) =>{
        const {username, userpassword} = req.body;
        if(!username || username === ''){
            return res.json({
                status:"error",
                message:"Username must be typed"
            });
        }
        if(!userpassword || userpassword === ''){
            return res.json({
                status:"error",
                message:"Password must be typed"
            });
        }
        Users.findOne({username}).exec((err,find) =>{
            if(err) throw err;
            if(!find){
                res.send("User not exist");
            }
            else{
                if(bcrypt.compareSync(userpassword,find.userpassword)){
                    let token = jwt.sign({id : find.id}, "asduhwjebw",{ expiresIn: 60 })
                    res.send({Token : token});
            }
                else
                {
                    res.send("Wrong password")
                }
            }
        })
    },
    loginDB: (req,res) =>{
        const {username, userpassword} = req.body;
        if(!username || username === ''){
            return res.json({
                status:"error",
                message:"Username must be typed"
            });
        }
        if(!userpassword || userpassword === ''){
            return res.json({
                status:"error",
                message:"Password must be typed"
            });
        }
        Users.findOne({username}).exec((err,find) =>{
            if(!find){
                res.send("User not exist");
            }
            else{
                if(bcrypt.compareSync(userpassword,find.userpassword)){
                    let token = "";
                    for(i = 0; i < 4; i++){
                        token += Math.random().toString(36).substring(2, 15) 
                    }
                Token.create({token,userid : find.id}).exec((err,create) => {
                    if(err) {
                        res.json({
                            status: "error",
                            message: "The token already exist!"
                        })
                    }
                    else {res.send(token);}
                }, trace => {
                    console.log(trace)
                })   
            }
                else
                {
                    res.send("Wrong password")
                }
            }
        })
    },
    logout: (req,res) =>{
        const {token} = req.body;
        Token.destroy({token}).exec((err,results) => {
            if(err) throw err;
            res.json({Message: 'Delete success'});
        })
    },

};