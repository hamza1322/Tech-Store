const { string } = require("joi");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

// Créer un model d'utilisateur (comme un classe)

const AdminSchema = new schema({
    email : {
        type : String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required : true
    }


});

module.exports = Admin = mongoose.model('Admin', AdminSchema);
