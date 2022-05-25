const Users = require('../Models/users')
const asyncExpress = require('express-async-handler')
const bcrypt = require('bcrypt')
const register = asyncExpress(async(req,res)=>{
const salt =bcrypt.genSaltSync(10)
   const isi = await Users.create({
        nama:req.body.nama,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password,salt)
    })
    const hasil = await isi.save()
    res.status(200).json(hasil)
    console.log(hasil)
})

module.exports = {register}