const mongoose = require('mongoose')
const connectDB = async()=>{
try{
    mongoose.connect(process.env.APP_DB)
    const con = mongoose.connection
    console.log(`Database telah berhasil (${con.readyState}) `)
}
catch(err){
    console.log(err)
    process.exit(1)
}
}
module.exports = connectDB