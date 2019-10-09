const jwt = require("jsonwebtoken");
module.exports = function(req,res,next){
    const {token} = req.headers;    
    jwt.verify(token, "asduhwjebw", function(err,tokenInfor){
        if(!tokenInfor) {
            Token.findOne({token}).exec((err,findTokenInfor) =>{
                if(err) throw err;
                else{
                    req.tokenInfor = findTokenInfor;
                    next();
                }
            })
        }
        // if(!tokenInfor) {
        //     return res.json(401,{err: 'Invalid token'});
        // }
        else{
            req.tokenInfor = tokenInfor;
            console.log(tokenInfor);
            next();
        }
        
    })  
};