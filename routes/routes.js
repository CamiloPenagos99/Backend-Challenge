'use stric'
//Archivo de routing para el backend
let express = require("express");
let controller = require("../controllers/controller"); 

//manejador de rutas
let router = express.Router(); 

//Definir las URI (rutas de conexion)
router.get("/average",controller.average);
router.get("/stringManipulation",controller.stringManipulation);
router.get("/sumArray",controller.sumArray);
router.get("/transformArray",controller.transformArray);
router.get("/myCows",controller.myCows);
router.get("/trackingCoordinadora",controller.trackingCoordinadora);
router.get("/arrayScore",controller.arrayScore);

module.exports = router;
