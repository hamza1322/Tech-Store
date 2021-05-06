const config = require("config");
const jwt = require("jsonwebtoken");

function auth(req, res, next){
    const token = req.header("x-auth-token");

    //Vérifier l'existance du token
    if(! token){
        res.status("401").json({msg : "Vous n'avez pas l'accées à cetter partie"});
    }
    try{
        //vérifier ça validité
        const decode = jwt.verify(token, config.get("jwt"));
        //Ajouter l'utilisateur
        req.user = decode;
        next();


    }catch(err){
        return res.status("401").json({msg : "Vous n'avez pas l'accées à cetter partie"});
    }
    

}

module.exports = auth;