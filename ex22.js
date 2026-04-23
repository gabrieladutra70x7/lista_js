const prompt = require('prompt-sync')();
console.log("--- Cálculo de Potência ---");
let base = Number(prompt(" Insira o valor para a base: "));
let exp = Number(prompt(" Insira o valor para o expoente: "));
console.log(`Potência: ${Math.pow(base, exp)}` );