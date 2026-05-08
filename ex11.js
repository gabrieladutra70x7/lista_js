const prompt = require('prompt-sync')();
console.log("--- Cálculo da Diferença de Dois Números Inteiros  ---");
let num = Number(prompt(" Insira um valor númerico inteiro "));
let num2 = Number(prompt(" Insira o segundo valor númerico inteiro "));
    if(isNaN(num) || isNaN(num2)){
    console.log("Erro: Certifique-se de inserir valores numéricos ");
}else{
    console.log(`Diferença: ${num} - ${num2} = ${num - num2}` );
}