const prompt = require('prompt-sync')();

console.log("--- Sucessor e Antecessor de número Inteiro ---");
let num = Number(prompt("Insira um valor numérico inteiro: " ));
console.log(`Sucessor = ${num + 1}\n Antecessor = ${num - 1} `);
