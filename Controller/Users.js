const Users = require('../Models/users')
const asyncExpress = require('express-async-handler')
const bcrypt = require('bcrypt')

const register = asyncExpress(async(req,res,next)=>{
const salt =bcrypt.genSaltSync(10)
    const {nama,email,password} = req.body  
    Users.findOne({nama:nama}).then(name=>{
        if(name){
            console.log('Username sudah ada')
            res.send({message:'Username sudah ada'})
        }
        else{
            Users.create({
                nama:nama,
                email:email,
                password:bcrypt.hashSync(password,salt)
            }).then(hasil=>{
                hasil.save()
                req.session.user = nama
                const namanya = req.session.user
                res.cookie('nama',namanya).status(200)
                res.end()
            })
        }
    })
})

const cekLogin = asyncExpress(async(req,res,next)=>{
    if(req.session.user){
        res.end()
    }
    else{
        var err = new Error('belum login');
        console.log(req.session.user)
        next(err)
    }
})


// cekAll
const cekAll = asyncExpress(async(req,res)=>{
    const data = await Users.find()
    res.status(200).json(data)
    console.log(data)
})
// login
const login =asyncExpress(async(req,res,next)=>{
    const {nama,password} = await req.body
    Users.findOne({nama:nama})
    .then(cekNama=>{
        if(cekNama){
            bcrypt.compare(password, cekNama.password).then(cekPassword=>{
                // res.send(nama)
                req.session.user = nama
                console.log('password benar')
                console.log(req.session.user)
                res.end()
            }).catch(err=>{
                res.send({message:"password salah"})
                console.log("password salah")
            })
        }
        else{
            res.send({message:"username salah"})
        }
    })
    .catch((err)=>{
    console.log(err)
    })})
// hapus
const hapus = asyncExpress(async(req,res)=>{
        Users.findByIdAndDelete(req.body.params).then(res.status(200).send('Data berhasil dihapus'))
        .catch(err=>{res.status(500).send(err)})
})
module.exports = {register,login,hapus,cekAll,cekLogin}