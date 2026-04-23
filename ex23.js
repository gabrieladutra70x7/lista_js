const prompt = require('prompt-sync')();

console.log("--- Cálculo do Volume da Lata de Óleo---");
let raio = Number(prompt("Digite o valor do raio: " ));
let Volume = Math.PI * (4/3) * Math.pow(raio, 3);
console.log(`O Volume é: ${Math.round(Volume)} cm³`);
