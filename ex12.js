const prompt = require('prompt-sync')();
console.log("--- Conversão de Dólar para Real ---");
const dolar = Number(prompt(" Insira o valor em dólar "));
    if(isNaN(dolar)){
console.log("Erro: Certifique-se de inserir um valor numérico ");
} else{
let real = dolar * 5.60;
console.log(`Valor em Reais (R$): ${real}` );
}