const prompt = require('prompt-sync')();

console.log("--- Soma de Valores ---");
let Celcius = Number(prompt("Digite a temperatura em Graus Celcius: " ));
let F = Celcius * 9/5 + 32 
console.log(`A temperatura em °Fahrenheit é: ${F}`);
