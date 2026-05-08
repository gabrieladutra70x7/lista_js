const prompt = require('prompt-sync')();
console.log("--- Maior e Menor Valor ---");
const n1 = Number(prompt("Insira o primeiro valor (inteiro): "));
const n2 = Number(prompt("Insira o segundo valor (inteiro):"));
const n3 = Number(prompt("Insira o terceiro valor (inteiro):"));
const n4 = Number(prompt("Insira o quarto valor (inteiro):"));
const n5 = Number(prompt("Insira o quinto valor (inteiro):"));
let maior;
let menor;

if(isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4) || isNaN(n5)){
    console.log("Erro: Certifique-se de inserir valores numéricos ");
}else{
    maior = n1;
    menor = n1;
        if (n2 > maior){
        maior = n2;
    }
       if (n2 < menor){
        menor = n2;
    }
    if (n3 > maior){
        maior = n3;
    }
       if (n3 < menor){
        menor = n3;
    }
    if (n4 > maior){
        maior = n4;
    }
       if (n4 < menor){
        menor = n4;
    }
    if (n5 > maior){
        maior = n5;
    }
       if (n5 < menor){
        menor = n5;
    } console.log (`\n Maior n° = ${maior}\n Menor n° = ${menor}`);
}