const prompt = require('prompt-sync')();

console.log("--- Quadrado da Soma de Três Números ---");
let a = Number(prompt("Digite o primeiro valor: " ));
let b = Number(prompt("Digite o segundo  valor: " ));
let c = Number(prompt("Digite o terceiro valor: " ));
if(isNaN(a) || isNaN (b) || isNaN (c)){
    console.log("Erro: Certifique-se de inserir valores numéricos ");
}else{
let qdsoma = Math.pow(a+b+c,2);
console.log(`(${a} + ${b} + ${c})² = ${qdsoma}`);
}