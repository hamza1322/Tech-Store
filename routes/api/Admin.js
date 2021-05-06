const bcrypt = require("bcryptjs");
const express = require("express");
const bodyparser = require("body-parser");
const router = express.Router();
const config = require("config");
const jwt = require("jsonwebtoken");


const Admin = require("../../models/Admin");

//obligatoir pour la récupération des information du post request.


// @route POST api/Admin
// @desc Register a new user 
// @access Public

router.post('/', require("body-parser").json(),async (req, res) =>{
    try{
            const {email, password} = req.body;
            //Vérification des entrées
            if(!email || !password){
                return res.status(400).json({msg: 'Vous avez des entrées invalides'});
            }

            //Vérifier si l'email existe au niveau de la base de données.
            Admin.findOne({email})
            .then(user =>{
                if(user) {
                    return res.status(400).json({ msg : "utilisateur existant"});
                }
                const newUser = new Admin({
                    email,
                    password
                });
                
                //Créer salt
                bcrypt.genSalt(10, (err, salt)=>{
                    bcrypt.hash(newUser.password, salt, (err, hash)=>{
                        if(err) throw err;
                        newUser.password = hash;
                        newUser.save()
                        .then(user =>{

                            jwt.sign(
                                {id: user.id},
                                config.get('jwt'),
                                {expiresIn: 3600},
                                (err, token) =>{
                                    if(err) throw err;
                                    res.json({
                                        token,
                                        user:{
                                            id : user.id,
                                            name :user.email,
                                        }
                                    });
                                }
                            );
                            
                        });
                    });
                });


            });






    }catch(err){
        return res.status(500).json({msg: "erreur est survenu"});
    }


    
    
    

});






module.exports = router;