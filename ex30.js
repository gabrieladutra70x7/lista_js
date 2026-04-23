const prompt = require('prompt-sync')();
console.log("--- Cálculo da Média e Verificação de Aprovação  ---");
let n1 = Number(prompt(" Insira a primeira nota: "));
let n2 = Number(prompt(" Insira a segunda nota: "));
let n3 = Number(prompt(" Insira a terceira nota: "));
let n4 = Number(prompt(" Insira a quarta nota: "));
let media = (n1+n2+n3+n4)/4 

if (media > 5){
 console.log(`\nAprovado\n Média: ${media}` );
}else {
     console.log(`Reprovado\n Média: ${media}` );
}