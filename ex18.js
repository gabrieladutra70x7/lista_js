const prompt = require('prompt-sync')();

console.log("--- Cálculo da Área de uma Circunferência ---");
let raio = Number(prompt("Digite o valor do raio: " ));
let area = Math.PI * (Math.pow(raio,2));
console.log(`Área da Circunferência: ${area}`); 