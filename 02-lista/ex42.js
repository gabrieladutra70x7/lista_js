const prompt = require('prompt-sync')();
console.log("--- Multiplicação e Verificação ---");

const n = Number(prompt("Insira um valor inteiro: "));

if(isNaN(n)){
    console.log("Erro: Certifique-se de inserir valores numéricos ");
}else{
    if ((n * 2) > 30){
        console.log(`\n Resultado: ${n} * 2 =  ${n*2}`);
    } else{
         console.log(`\n (Nenhum valor a ser apresentado)`);
    }
}