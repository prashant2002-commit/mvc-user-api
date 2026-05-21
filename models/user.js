const mongoose = require('mongoose')

//schema
const userSchema = new mongoose.Schema({
    first_name : {
        type: String,                //this tells the mongoose the type of data in first_name
        required: true                  //this tells that input is must
    },
    last_name: {
        type : String,
    },
    email: {
        type: String,
        required: true,
        unique: true                //this tells that the email of everyuser must be unique
    },
    jobTitle: {
        type: String
    },
    gender: {
        type: String
    }

},{timestamps: true})

const user = mongoose.model('user',userSchema)

module.exports = user