const prompt = require('prompt-sync')();

console.log("--- Soma dos Quadrados de Três Números ---");
let a = Number(prompt("Digite o primeiro valor: " ));
let b = Number(prompt("Digite o segundo  valor: " ));
let c = Number(prompt("Digite o terceiro valor: " ));
if(isNaN(a) || isNaN(b) || isNaN(c)){
console.log("Erro: Certifique-se de inserir um valor numérico ");
}else{
let qdsoma = Math.pow(a,2) + Math.pow(b,2) + Math.pow(c,2);
    console.log(`${a}² + ${b}² + ${c}²  = ${qdsoma}`);
}