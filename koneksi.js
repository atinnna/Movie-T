const mongoose = require('mongoose')

const connectDB = async()=>{
try{
        mongoose.connect(process.env.APP_DB,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    const connection = mongoose.connection
    connection.once('open',()=>{
        console.log(`Database telah berhasil ke ${connection}`)
    })
}
catch(err){
    console.log(err)
    process.exit(1)
}
}

module.exports = connectDB