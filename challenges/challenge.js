
const challenge = {

    //Primer ejercicio
    average: async(a, b)=>{
        try {
        const response = (a+b)/2;
        console.log("average:", response);
        return response;
        } catch (e) {
        throw new TypeError("Ha ocurrido un error con este reto");
        }
        },
    
    //segundo ejercicio
    stringManipulation: (word)=>{
        
        const endWith= word.endsWith("!"); //validar si termina en !
        if (!endWith) return word;
        else if(endWith){
            const newStr = word.slice(0, -1); 
            return newStr; 
        }
        
    },

    //tercer ejercicio
    sumArray: (array)=>{

        if(array.length==0 || array==[]){ return 0};

        console.log("entrada:", array);

        //suma total
        let suma=0;
        const sumatTotal= array.forEach(num => {
            suma += num;
        });

        //enteros positivos
        const enterosPositivos= array.filter(num => Math.sign(num)>0);
        
        let sumaPositivos=0;
        enterosPositivos.forEach(num => {
            sumaPositivos += num;
        });

        //numeros pares
        const numerosPares= array.filter( num => num % 2 == 0 );
        console.log("numerosPares:", numerosPares);
        let sumaPares=0;
        numerosPares.forEach(num => {
            sumaPares += num;
        });

        //numeros impares
        const numerosImpares= array.filter( num => num % 2 != 0 );
        console.log("numerosImpares:", numerosImpares);
        let sumaImpares=0;
        numerosImpares.forEach(num => {
            sumaImpares += num;
        });

        const res={
           suma,
           sumaPositivos,
           sumaPares,
           sumaImpares 
        }

        return res;
    },

    //cuarto ejercicio
    TransformArray: (matriz, orden)=>{
       // console.log("entrada...", matriz)
        const fila1=matriz[0];
        const fila2=matriz[1];
        
        var newarray=[]

            for(j=0; j<matriz.length; j++){
            for(i=0; i<matriz[j].length; i++){
            //console.log(array[j][i]);
            //console.log(typeof array[j][i]);  
            if(!isNaN(matriz[j][i])) newarray.push(parseInt(matriz[j][i]));
                }
            }
        

        if(orden=='ASC') {
            newarray.sort();
            return newarray.sort(); }
        else if(orden=='DESC') {
            newarray.sort().reverse()
            return newarray};
            
    },

    
    //quinto ejercicio
    MyCows: (matriz)=>{

    //objeto que contiene el reporte global
    var reportGlobal={};

    //*Suma de produccion Hatos diarios
   const SumasHato={};
   //const sumaHato = []
     for(j=0; j<matriz.length; j++){
       let sumaDia=0;     
          for(i=0; i<matriz[j].length; i++){            
            sumaDia+=matriz[j][i];
             }
              //sumaHato[j]= sumaDia;
              const currentDay= (parseInt(j))+1
              const newDay = "Dia" + currentDay;
              const newValue = sumaDia;
              SumasHato[newDay] = newValue ;
            }
        
        reportGlobal.produccion=SumasHato
        //console.log(SumasHato);
    
        //console.log(JSON.parse(SumasHato))
        //* Formatear Json, para obtener el dia con maxima y minima produccion de leche
        const MyCowsMaxMin= (json) =>{
            const reportMinMax={};
            let mayor=0;
            let menor=100;
            let diaMayor="";
            let diaMenor="";
            for (let i in json){
                if(json[i]>mayor)
                {mayor=json[i]
                diaMayor=i}  //obtener la tupla dia, de mayor produccion
                
                if(json[i]<menor){
                    menor=json[i] //obtener la tupla dia, de menor produccion
                    diaMenor=i 
                }
            }

            reportMinMax.menor={diaMenor}
            reportMinMax.mayor={diaMayor}

            return reportMinMax;
        }
        
      const reportMinMaX= MyCowsMaxMin(SumasHato);
      reportGlobal.MinMaxDay=reportMinMaX

      //Recorrer la matriz, para encontrar la vaca con mejor produccion de leche x dia
      const MyCowBestCow = ()=>{
      const bestCows={};
       
        const mejoresRegistros=[];
        for(j=0; j<matriz.length; j++){
        let mejorRegistro=0;
        let vaca="Vaca";
          for(i=0; i<matriz[j].length; i++){
                if(matriz[j][i]>=mejorRegistro){
                    mejorRegistro=matriz[j][i]
                    vaca=(parseInt(i))+1
                    mejoresRegistros[j]=mejorRegistro; //guardar los mejores registros para futura referencia
                }           
                
                }
                
                }
              
        
                //Con el mayor valor producido buscar las vacas coincidentes x dia
                
                for(j=0; j<matriz.length; j++){
                    let vaca="Vaca";
                    const cows=[];
                      for(i=0; i<matriz[j].length; i++){
                            if(matriz[j][i]==mejoresRegistros[j]){
                                const currentCow= (parseInt(i))+1;
                                const cow = "Vaca" + currentCow;
                                cows.push(cow);
                            }           
                            
                            }
                            const currentDay= (parseInt(j))+1;
                            const newDay = "Dia" + currentDay;
                            bestCows[newDay]=cows;
                            }

                        console.log(bestCows);
                return bestCows;
        }

       const bestCows= MyCowBestCow(matriz);
       reportGlobal["bestCows"]=bestCows

        return reportGlobal;
    },

    
    MyCowsMaxMin: (matriz)=>{
        
    },

    //septimo ejercicio
    TrackingCoordinadora: (array, id, tracks)=>{
    
    var reporte={} //objeto reporte final

    //Buscar una guia, por el parametro de remision enviado
        function dataApiGuias(json,id){
            let header = {}
            let respuesta={}
            for (let i in json){
               const cod=json[i].codigo_remision.trim();
                if(cod == id){
                
                header['codigo_remision']=json[i].codigo_remision;
                header['nombre_destinatario']=json[i].nombre_destinatario;
                header['dir_destinatario']=json[i].dir_destinatario;
                console.log(header);
                respuesta=json[i];               
                }
                
            }

            const unidades =unidadesId(respuesta.unidades); //buscar los ID de las unidades de una guia
            const cheks = searchBreakpoint(unidades,tracks); //buscar los checkpoints asociados a una guia ID

            //formatear respuesta, reporte

            reporte['data']=header;
            reporte.data['unidades']=cheks;
            return reporte;
        }

        function dataApiTracking(json){
            const unidades=(json.unidades);
            //console.log(unidades)
            for (let i in unidades){
               //console.log(unidades[i]);
               unidades[i]['TRACKING']={"tracking": "checkpoints"};
               //console.log(unidades[i])
            }
        }

        //Obtener los Id unidades de la guia
        const unidadesId= (guia)=>{
            const unidades = {};
            for (let i in guia){
                
                unidades[i]={"etiqueta1d":guia[i].etiqueta1d};
               
             }
            // unidades[0].trac={"track": "data"};
            return unidades;
        }

        const searchBreakpoint = (units,tracking) =>{
            let unidades=units;
            for (let i in unidades){
                let cheks = [];
                let id = unidades[i].etiqueta1d;
                for(let j in tracking){
                    if(id==tracking[j].etiqueta1d){
                        cheks.push(tracking[j]);
                    }
                }
                unidades[i]['cantidad_checkpoints']=cheks.length;
                unidades[i].unidades=cheks;
               
             }
             //console.log(unidades);
             return unidades;
        }

    const res = dataApiGuias(array,id);
    
    return res;
},

    //octavo ejercicio
    arrayScore: (array)=> {

        let score=0;
        if(array.length==0 || array==[]){ return 0};
        const sumatTotal= array.forEach(num => {
            if(num % 2 == 0) score ++;
            else if(num % 2 != 0 && num!=5) score+=3;
            else if(num == 5) score+=5;
        });
        return score;
    }

}

module.exports = challenge;