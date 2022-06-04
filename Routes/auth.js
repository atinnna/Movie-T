const express = require('express')
const router = express.Router()
const {register,login, hapus,cekAll} = require('../Controller/register')
router.get('/cek',cekAll)
router.post('/',register)
router.post('/login',login)
router.delete('/:id',hapus)
module.exports = router