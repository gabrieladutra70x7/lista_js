const prompt = require('prompt-sync')();

console.log("--- Conversor de Temperatura (Celsius)---");
const Fahrenheit = Number(prompt("Digite a temperatura em Graus Fahrenheit: " ));
if (isNaN(Fahrenheit)){
    console.log("Erro: o valor inserido não é um número válido");
}else{
const C = (Fahrenheit - 32) * 5/9
console.log(`A temperatura em °Celsius é: ${C}`);
}