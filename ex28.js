const prompt = require('prompt-sync')();
console.log("--- Cálculo da Diferença de Dois Números Inteiros  ---");
let num = Number(prompt(" Insira um valor númerico inteiro "));
let num2 = Number(prompt(" Insira o segundo valor númerico inteiro "));
let dif;
if (num2 > num){
 dif = num2 - num;
}else{
     dif = num - num2;
}

console.log(`Diferença: ${dif}` );