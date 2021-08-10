'use strict'
//let mongoose = require('mongoose');
const app = require('./app');
const port = 3001;


// iniciar server
const PORT = process.env.PORT || port;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})
