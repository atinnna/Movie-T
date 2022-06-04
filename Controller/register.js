const Users = require('../Models/users')
const asyncExpress = require('express-async-handler')
const bcrypt = require('bcrypt')


const register = asyncExpress(async(req,res)=>{
res.setHeader('Set-Cookie','Register=true')
const salt =bcrypt.genSaltSync(10)
// res.setHeader('Set-Cookie','Register=true')
   const isi = await Users.create({
        nama:req.body.nama,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password,salt)
    })
    const hasil = await isi.save()
    res.status(200).json(hasil)
    res.setHeader('Set-Cookie','Register=true')
    console.log(hasil)
})

// cekAll
const cekAll = asyncExpress(async(req,res)=>{
    const data = await Users.find()
    res.status(200).json(data)
    console.log(data)
})
// login
const login =asyncExpress(async(req,res)=>{
    const {nama,password} = await req.body
    const cekNama = await Users.findOne({nama:nama})
    // const k = res.json(cekNama)
    if(cekNama){
        const cekPassword = await bcrypt.compare(password, cekNama.password)
        if (cekPassword) {
            res.send(nama)
            console.log('password benar')
        }else{
            res.send({message:"password salah"})
           console.log("password salah")
        }
    }
    else{
        console.log('username salah')
        res.send({message:"username salah"})
    }
    
})
// hapus
const hapus = asyncExpress(async(req,res)=>{
        Users.findByIdAndDelete(req.body.params).then(res.status(200).send('Data berhasil dihapus'))
        .catch(err=>{res.status(500).send(err)})
})
module.exports = {register,login,hapus,cekAll}