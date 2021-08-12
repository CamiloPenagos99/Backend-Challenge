'use stric'
//Archivo de routing para el backend
let express = require("express");
let controller = require("../controllers/controller");
let middleware = require("../middleware/myCow-Mid");

//manejador de rutas
let router = express.Router(); 

//Definir las URI (rutas de conexion)

/**
 * @swagger
 *  /average:
 *    get:
 *      summary: Retorna el promedio de dos numeros
 *      parameters:
 *          - in: query
 *            name: num1
 *            required: true
 *            description: Numero uno a sumar
 *      
 *          - in: query
 *            name: num2
 *            required: true
 *            description: Numero dos a sumar     
 *      responses:
 *        "200":
 *          description: Resultado promedio solicitud
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 */
router.get("/average",controller.average);


/**
 * @swagger
 *  /stringManipulation:
 *    get:
 *      summary: Retorna la palabra transformada, borrando el ultimo '!'
 *      parameters:
 *          - in: query
 *            name: word
 *            required: true
 *            description: Palabra para transformar    
 *      responses:
 *        "200":
 *          description: Palabra transformada
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 */
router.get("/stringManipulation",controller.stringManipulation);


router.get("/sumArray",controller.sumArray);


router.get("/transformArray",controller.transformArray);



router.get("/myCows",middleware,controller.myCows);

/**
 * @swagger
 * /trackingCoordinadora/{codigo_remision}:
 *   get:
 *     summary: Obtiene reporte de guias y tracking
 *     tags: [Tracking]
 *     parameters:
 *       - in : path
 *         name: codigo_remision
 *         description: Identificador de remision
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Reporte de guia y tracking asociado
 *         content:
 *           application/json:
 *             schema:
 *               type: json
 *       400:
 *         description: error en la solicitud
 */
router.get("/trackingCoordinadora/:codigo",controller.trackingCoordinadora);



router.get("/arrayScore",controller.arrayScore);

module.exports = router;
