const { response } = require('express')
const express = require('express')
const Login = require('../models/Login')
const router = express.Router()

router.get('/', (req,res) => {
    res.send('sas')
})


module.exports = router