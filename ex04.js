const prompt = require('prompt-sync')();

console.log("--- Cálculo do Volume da Lata de Óleo---");
let raio = Number(prompt("Digite o valor do raio: " ));
let altura = Number(prompt("Digite o valor da altura: " ));
let Volume = Math.PI * (raio * raio) * altura;
console.log(`O Volume é: ${Volume} cm³`);
