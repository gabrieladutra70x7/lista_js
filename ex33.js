const prompt = require('prompt-sync')();
console.log("--- Ordenação de Três Números Inteiros ---");
let n1 = Number(prompt(" Insira o primeiro valor inteiro: "));
let n2 = Number(prompt(" Insira o segundo valor inteiro: "));
let n3 = Number(prompt(" Insira o terceiro valor inteiro: "));
let temp;
if (n1 > n2){
    temp = n1;
    n1 =  n2;
    n2 = temp;
}if (n1 > n3){
    temp = n1;
    n1 = n3;
    n3 = temp;
}if (n2 > n3){
    temp = n2;
    n2 = n3;
    n3 = temp;
}
console.log(`Ordem crescente: ${n1}, ${n2}, ${n3}`);