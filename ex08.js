const prompt = require('prompt-sync')();

console.log("--- Cálculo do Volume da Caixa Retangular ---");
let comp = Number(prompt("Digite o valor do comprimento: " ));
let larg = Number(prompt("Digite o valor do largura: " ));
let altura = Number(prompt("Digite o valor da altura: " ));
let Volume = comp * larg * altura;
console.log(`O Volume é: ${Volume} cm³`);