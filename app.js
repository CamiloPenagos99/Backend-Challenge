'use strict'
//Importar dependencias
const express = require("express");
const bodyParser = require("body-parser");
const JsDoc = require("swagger-jsdoc");
const SwUi = require("swagger-ui-express");

//Importar archivos de rutas
let routes = require("./routes/routes");
const swaggerJSDoc = require("swagger-jsdoc");


//configurar swagger
const swaggerOptions= {
    definition: {
        openapi: "3.0.0",
        info: {
          title: "Backend Challenge Api",
          version: "1.0.0",
          description: "Backend usando Node, Express: Expone URI para ejecutar retos",
          contact: {
            name: "Camilo Penagos",
            email: "penagoscamilo99@gmail.com",
          },
        },
    
        servers: [
          {
            url: "http://localhost:3001/challenge",
            description: "router principal",
          },
        ],
      },
      apis: ["app.js","./routes/routes.js"],
    }

    //"app.js","./routes/routes.js"

    //Crear express app web
    let app = express();
    //Definir router principal
    app.use("/challenge",routes); 

    //server de swagger para documentacion
    const swaggerDocs = swaggerJSDoc(swaggerOptions);
    app.use('/challenge/docs', SwUi.serve,SwUi.setup(swaggerDocs));




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