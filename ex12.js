const prompt = require('prompt-sync')();
console.log("--- Conversão de Dólar para Real ---");
let dolar = Number(prompt(" Insira o valor em dólar "));
let real = dolar * 5.60;
console.log(`Valor em Reais (R$): ${real}` );