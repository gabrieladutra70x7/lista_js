const prompt = require('prompt-sync')();
console.log("--- Soma e Verificação ---");

const n1 = Number(prompt("Insira o primeiro valor: "));
const n2 = Number(prompt("Insira o segundo valor:"));
const n3 = Number(prompt("Insira o terceiro valor:"));

if(isNaN(n1) || isNaN(n2) || isNaN(n3)){
    console.log("Erro: Certifique-se de inserir valores numéricos ");
}else{
    if ((n1 + n2 + n3) > 100){
        console.log(`\n Resultado: ${n1} + ${n2} + ${n3} =  ${n1 + n2 + n3}`);
    } else{
         console.log(`\n (Nenhum valor a ser apresentado)`);
    }
}