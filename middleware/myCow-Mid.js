//middleware de verificacion de requerimientos, para la ruta "myCow"
const verificar = (req,res,next)=>{
    const reqmatriz = req.body.matriz
    //console.log(reqmatriz.length);

    //validar la estructura de la matriz, cantidad de dias
    if(!reqmatriz || reqmatriz.length==0 || reqmatriz.length!=7){
        return  res.status(400).json({
            error: true,
            msg: "Debe existir una matriz"
        })
    }
    
    //validar la variable N, menor de 50 y mayor de 3 (cantidad de vacas)
    if(reqmatriz[0]['dia1'].length>50 || reqmatriz[0]['dia1'].length<3){ 
        return  res.status(400).json({
        error: true,
        msg: "La variable N(cantidad de vacas), debe ser mayor 3 y menor de 50"
    })
}
        
       //Parsear la matrizBi Json a MatrizBi de javascript
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
    
    //*validar cantidad de leche por vaca-dia
    var casillaerror=""
    const validarCantidadLeche = (matriz) =>{
        var validado=true;
        for(j=0; j<matriz.length; j++){
            let lecheDia=0;     
               for(i=0; i<matriz[j].length; i++){
                lecheDia=matriz[j][i];         
                if(lecheDia>11.9 || lecheDia<0 ){
                    casillaerror= `Validar la casilla ${j},${i}`;
                    validado=false;
                    break;
                    }
                  }                                      
                 }
        return validado
       }

       //enviar error por cantidad de leche
       const validado= validarCantidadLeche(matriz);
       if(!validado){
        res.status(400).json({
            estado: "error",
            msg: "Producción de leche de cada vaca debe estar entre 0.0 y 11.9 litros",
            casilla: casillaerror
        })
       } else if(validado){
            next();
       }

    
}

module.exports = verificar;