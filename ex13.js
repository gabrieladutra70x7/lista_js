const prompt = require('prompt-sync')();
console.log("--- Conversão de Dólar para Real ---");
let real = Number(prompt(" Insira o valor em Reais: "));
if(isNaN(Number)){
    console.log("Erro: O valor inserido não é um número válido.");
}else{
let Dolar = real / 5.60;
console.log(`Valor em Dólares (US$): ${Dolar}` );
}