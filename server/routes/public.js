
const express = require('express')

const path = require('path')
const root = path.join(__dirname,'../public/')

module.exports = (server) => {

    // index.html
    server.get('/',(req,res)=>{
        res.sendFile(root + 'index.html')
    })

    // public static files
    server.use('/css', express.static(root + 'css/'))
    server.use('/app', express.static(root + 'app/'))
    server.use('/fonts', express.static(root + 'fonts/'))
}
