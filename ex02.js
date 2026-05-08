const prompt = require('prompt-sync')();

console.log("--- Conversor de Temperatura ---");

const Celcius = Number(prompt("Digite a temperatura em Graus Celcius: " ));
if(isNaN(Celcius)){
    console.log("Erro: o valor inserido não é um número válido")
}else{
const F = Celcius * 9/5 + 32 ;

console.log(`A temperatura em °Fahrenheit é: ${F}`);
}