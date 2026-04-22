const prompt = require('prompt-sync')();

console.log("--- Troca de Valores entre variáveis ---");
let A = Number(prompt("Digite o valor para a variável A: " ));
let B = Number(prompt("Digite o o valor para a variável B: " ));
let variável = A; A = B; B = variável;    


console.log(`Antes da troca: A = ${B} , B = ${A}. Depois da troca: A = ${A} , B = ${B}`);