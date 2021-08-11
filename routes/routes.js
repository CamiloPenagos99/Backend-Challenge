'use stric'
//Archivo de routing para el backend
let express = require("express");
let controller = require("../controllers/controller");
let middleware = require("../middleware/myCow-Mid");

//manejador de rutas
let router = express.Router(); 

//Definir las URI (rutas de conexion)
router.get("/average",controller.average);
router.get("/stringManipulation",controller.stringManipulation);
router.get("/sumArray",controller.sumArray);
router.get("/transformArray",controller.transformArray);
router.get("/myCows",middleware,controller.myCows);
router.get("/trackingCoordinadora/:codigo",controller.trackingCoordinadora);
router.get("/arrayScore",controller.arrayScore);

module.exports = router;
