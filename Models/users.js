const mongose = require('mongoose')

const userModel = new mongose.Schema({
    nama:{
        type:String,
        required:true
    },
    email:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    }
},
    {timestamps:true}
)

module.exports = mongose.model('Users',userModel)