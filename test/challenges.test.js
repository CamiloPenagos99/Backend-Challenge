//importar los retos
const challenge = require("../challenges/challenge");

//escribir test

test ('Probar primer metodo (promedio) del reto', ()=>{
    const result = challenge.average(10,30);

    expect(result).toBe(20);
})