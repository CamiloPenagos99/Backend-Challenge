//importar los retos
const challenge = require("../challenges/challenge");
const fetch= require("node-fetch");

const controller = {

    //Primer ejercicio
    average: async (req, res)=>{
        const num1= parseInt(req.query.num1);
        const num2= parseInt(req.query.num2);
        const ret =  await challenge.average(num1,num2); //await de la promesa de average
        res.json({
            estado: "ok",
            //msg: "Primer controlador funcionando",
            result: ret
        })
    },
    
    //segundo ejercicio
    stringManipulation: (req, res)=>{
        const word = req.query.word;
        const ret = challenge.stringManipulation(word);
        res.json({
            estado: "ok",
            result: ret
        })
    },

    //tercer ejercicio
    sumArray: (req, res)=>{
        console.log(req.body);
        const requestArray=req.body.array;
        //const stringArray=requestArray.split(',');
        const array=requestArray.map(num => parseInt(num));
        console.log(array);
        const ret=challenge.sumArray(array);

        res.json({
            estado: "ok2",
            ret
        })
    },

    //cuarto ejercicio
    transformArray: (req, res)=>{
        const matriz = req.body.matriz;
        const array = [matriz[0].dim1.split(','),matriz[1].dim2.split(',')];
        const orden= req.body.orden;
        
        const result = challenge.TransformArray(array,orden);
        const jsonRes=JSON.stringify(result);
        
        res.json({
            estado: "ok",
            result
        })
    },

    //quinto ejercicio
    myCows: (req, res)=>{
        const reqmatriz = req.body.matriz
        
        
        //Parsear la matriz Json a Matriz de javascript
        const parsear = (jsonarray) =>{
            const matriz=[];
            var i=0;
            while(i<jsonarray.length){
                const currentDay= (parseInt(i))+1
                const id = "dia" + currentDay;
                matriz[i]=jsonarray[i][id];
                i++;
            }

            return matriz;
        }

       const matriz = parsear(reqmatriz);

        const reporteGlobal = challenge.MyCows(matriz); //reporte hato de leche
        res.json({
            estado: "ok",
            reporteGlobal
        })
    },

   
    //sexto ejercicio
    trackingCoordinadora: (req, res)=>{
        const API_GUIAS = 'https://api.coordinadora.com/cm-model-testing/api/v1/talentos';
        const API_TRACKING = 'https://api.coordinadora.com/cm-model-testing/api/v1/talentos/checkpoint';
        let id = req.params.codigo;
       if(id=="" || !id || id.length!=11){
           let msg = "Ingrese un codigo de 11 digitos valido"
           if(id.length==15) msg = "Metodo para buscar por ETIQUETA, aun no implementado"
        res.json({      
            isError: true,      
            status: "failed",
            er: msg
        })
       } 
        //funciones auxiliares de busqueda y formato
        const format = (json,id,track) =>{
          return challenge.TrackingCoordinadora(json.guias,id,track); 
        }

        //llamado asincrono a los endpoint

        //llamado 
        const getData = async ()=>{
            try{
              const respApiGuias = await fetch(API_GUIAS);
              const jsonguias = await respApiGuias.json();
              const guias = jsonguias.data
              //console.log("las guias son: ", guias);
             

              const respApiTracking = await fetch(API_TRACKING);
              const tracking = await respApiTracking.json();
              const dataTrack = tracking.data;
              //console.log(respGuia)
              const payload = format(guias,id,dataTrack); //iniciar busqueda de codigo_remision Total

              //enviar formato al client
              res.json({
                isError: false,      
                status: "succes",
                payload
            })

            }catch(er){
                console.log(er);
                res.json({      
                    isError: true,      
                    status: "failed",
                    er
                })
            }
        }

        

        getData(); //obtener la data de los servicios 

        

       
    },

    //septimo ejercicio
    arrayScore: (req, res)=>{
        const reqArray = req.body.array;
        const array=reqArray.map(num => parseInt(num));
        const score = challenge.arrayScore(array);
        res.json({
            estado: "ok",
            score
        })
    },
    

}

module.exports = controller;