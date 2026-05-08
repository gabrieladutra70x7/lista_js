const prompt = require('prompt-sync')();
console.log("--- Valores Divisíveis por 3 e 2 ---");

const n1 = Number(prompt("Insira o primeiro valor: "));
const n2 = Number(prompt("Insira o segundo valor:"));
const n3 = Number(prompt("Insira o terceiro valor:"));
const n4 = Number(prompt("Insira o quarto valor:"));

if(isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4) ){
    console.log("Erro: O valor inserido não é um número válido ");
}else{
    if(n1 %2 === 0 && n1 %3 === 0){
        console.log(`\n\n${n1} é divisível por 2 e 3 `);
    }if(n2 %2 === 0 && n2 %3 === 0){
        console.log(`\n\n${n2} é divisível por 2 e 3 `);
    }if(n3 %2 === 0 && n3 %3 === 0){
        console.log(`\n\n${n3} é divisível por 2 e 3 `);
    }if(n4 %2 === 0 && n4 %3 === 0){
        console.log(`\n\n${n4} é divisível por 2 e 3 `);
    }

}