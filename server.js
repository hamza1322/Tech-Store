const express = require("express");
const path = require("path");
const mongoose =require("mongoose");
const bodyparser = require("body-parser");
const auth = require("./routes/api/auth");
const config = require("config");
const cors = require("cors");
const app = express();

app.use(cors());
// Getting the mongodb key
const db = config.get("MongoDbURI");


// connexion à la base de données
mongoose
.connect(db, { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex:true })
.then(() => {console.log("Connexion etablie avec la base de donnees")})
.catch(err => {console.error(err)});



//Definition des routes
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use("/api/auth", auth);

app.post('/',bodyparser.json(),(req, res) =>{
    const {email, password} = req.body;
    if(!email || ! password){
        console.log("error");
        res.status(400).json({msg:"404"});
    }else{
        res.status(200).json({msg:"200"});
    }
});

//connection au serveur
const port = process.env.port || 5000;

app.listen(port,()=>{
    console.log(`Lancement de l'application au port ${port}`)
});


