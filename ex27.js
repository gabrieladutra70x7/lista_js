const prompt = require('prompt-sync')();

console.log("--- Quadrado da Divisão de Dois Números Inteiros ---");
let a = Number(prompt("Digite o valor numérico inteiro: " ));
let b = Number(prompt("Digite o outro valor numérico inteiro: " ));
if(isNaN(a) || isNaN(b) || b === 0){
    console.log("Erro: Certifique-se de inserir valores numéricos válidos");
}else{

let qddivi = Math.pow(a/b ,2);

console.log(`(${a}/${b})² = ${qddivi.toFixed(2)}`);
}