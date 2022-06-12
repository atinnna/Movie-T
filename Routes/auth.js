const express = require('express')
const router = express.Router()
const {register,login, hapus,cekAll,cekLogin} = require('../Controller/Users')
router.get('/cek',cekAll)
router.post('/',register)
router.post('/login',login)
router.delete('/:id',hapus)
router.get('/page_protected',cekLogin)
module.exports = router