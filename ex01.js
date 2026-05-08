const prompt = require('prompt-sync')();
// Importando o módulo que você instalou via terminal const prompt = require('prompt-sync');
console.log("--- Soma de Valores ---");
let num1 = Number(prompt("Digite o primeiro número: " ));
let num2 = Number(prompt("Digite o segundo número: "));
let soma = num1 + num2;

//Template String (usa crases): facilita exibir variáveis no meio so texto
console.log(`O resultado da soma entre ${num1} e ${num2} é: ${soma}`);