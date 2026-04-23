const prompt = require('prompt-sync')();

console.log("--- Cálculo do Novo Salário com Aumento ---");
let salario = Number(prompt("Digite o valor do salário mensal: " ));
let aumento = Number(prompt("Digite a porcentagem do aumento do salário: " ));
let total = salario * (aumento/100);
console.log(`Novo Salário: ${salario+total}\n Aumento: ${total}`);