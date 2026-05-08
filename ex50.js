console.log("Potência de uma Base Elevada a um Expoente");
let base = 4;
let expoente = 2;
    let potencia = base;
     for(let i = 1; i < expoente; i++){
        potencia *= base; 
     } console.log(`${base} ^ ${expoente} = ${potencia}`);