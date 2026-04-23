const prompt = require('prompt-sync')();

console.log("--- Quadrado da Divisão de Dois Números Inteiros ---");
let a = Number(prompt("Digite o valor numérico inteiro: " ));
let b = Number(prompt("Digite o outro valor numérico inteiro: " ));

let qddivi = Math.pow(a/b ,2);

console.log(`(${a}/${b})² = ${qddivi}`);