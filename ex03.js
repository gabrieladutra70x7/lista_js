const prompt = require('prompt-sync')();

console.log("--- Conversor de Temperatura (Celsius)---");
let Fahrenheit = Number(prompt("Digite a temperatura em Graus Fahrenheit: " ));
let C = (Fahrenheit - 32) * 5/9
console.log(`A temperatura em °Celsius é: ${C}`);
