const express = require('express')

const router = express.Router()

router.post('/register', function register(req, res, next) {

    res.send('hello post man')
    
    console.log('am making a post request');
    
})

module.exports =router