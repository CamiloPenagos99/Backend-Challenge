//importar los retos
const challenge = require("../challenges/challenge");

const controller = {

    //Primer ejercicio
    average: async (req, res)=>{

        const num1= parseInt(req.query.num1);
        const num2= parseInt(req.query.num2);
        const ret =  await challenge.average(num1,num2); //await de la promesa de average
        res.json({
            estado: "ok",
            msg: "Primer controlador funcionando",
            challenge: ret
        })
        },
    
    //segundo ejercicio
    stringManipulation: (req, res)=>{
        const word = req.query.word;
        const ret = challenge.stringManipulation(word);
        res.json({
            estado: "ok",
            msg: "segundo controlador funcionando",
            challenge: ret
        })
    },

    //tercer ejercicio
    sumArray: (req, res)=>{
        const requestArray=req.body.array;
        const stringArray=requestArray.split(',');
        const array=stringArray.map(num => parseInt(num));
        console.log(array);
        const ret=challenge.sumArray(array);

        res.json({
            estado: "ok",
            ret
        })
    },

    //cuarto ejercicio
    transformArray: (req, res)=>{
        console.log("cuarto controlador");
        res.json({
            estado: "ok",
            msg: "cuarto controlador funcionando"
        })
    },

    //quinto ejercicio
    myCows: (req, res)=>{
        console.log("quinto controlador");
        res.json({
            estado: "ok",
            msg: "quinto controlador funcionando"
        })
    },

   
    //sexto ejercicio
    trackingCoordinadora: (req, res)=>{
        console.log("sexto controlador");
        res.json({
            estado: "ok",
            msg: "sexto controlador funcionando"
        })
    },

    //septimo ejercicio
    arrayScore: (req, res)=>{
        console.log("septimo controlador");
        res.json({
            estado: "ok",
            msg: "septimo controlador funcionando"
        })
    },
    

}

module.exports = controller;