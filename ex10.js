const prompt = require('prompt-sync')();
console.log("--- Cálculo do Quadrado de um Número Inteiro  ---");
let num = Number(prompt(" Insira um valor númerico inteiro"));
let quad = Math.pow(num,2); 
console.log(`Quadrado = ${quad}` );