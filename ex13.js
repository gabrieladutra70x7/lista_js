const prompt = require('prompt-sync')();
console.log("--- Conversão de Dólar para Real ---");
let real = Number(prompt(" Insira o valor em Reais: "));
let Dolar = real / 5.60;
console.log(`Valor em Dólares (US$): ${Dolar}` );