'use strict'
//Importar dependencias
let express = require("express");
let bodyParser = require("body-parser");

//Importar archivos de rutas
let routes = require("./routes/routes");


//Crear express app web
let app = express();


//Configuracion de CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //Origenes permitidos
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//Middleware
// configurar req body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Definir router principal
app.use("/challenge",routes); 

//Exportar modulo
module.exports = app;