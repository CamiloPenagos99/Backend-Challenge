//importar los retos
const challenge = require("../challenges/challenge");

//escribir test
test ('Probar metodo de prueba', ()=>{
   const result = challenge.multi(2,10);
   expect(result).toBe(20);
  });   


test ('Probar primer metodo (promedio) del reto', ()=>{
      return challenge.average(20,30).then(result =>{
        expect(result).toBe(25);
    });   
})