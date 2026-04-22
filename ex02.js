const prompt = require('prompt-sync')();

console.log("--- Conversor de Temperatura ---");

let Celcius = Number(prompt("Digite a temperatura em Graus Celcius: " ));
let F = Celcius * 9/5 + 32 

let Celsius = Number(prompt("Digite a temperatura em Graus Celsius: " ));
let F = Celsius * 9/5 + 32 

console.log(`A temperatura em °Fahrenheit é: ${F}`);
