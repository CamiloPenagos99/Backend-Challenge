
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
    TransformArray: (arrayB, orden)=>{
        console.log("cuarto ejercicio para array... y orden", arrayB, orden);
    },

    //quinto ejercicio
    MyCows: (array)=>{
        console.log("quinto ejercicio para array", array);
    },

    //sexto ejercicio
    MyCows: (array)=>{
        console.log("quinto ejercicio para array", array);
    },

    //septimo ejercicio
    TrackingCoordinadora: (id,ruta)=>{
        console.log("sexto ejercicio con consumo api para id", id)
    },

    //octavo ejercicio
    arrayScore: (array)=> {
        console.log("octavo ejercicio funcionando")
    }

}

module.exports = challenge;