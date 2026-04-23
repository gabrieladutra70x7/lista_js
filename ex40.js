const prompt = require('prompt-sync')();
console.log("--- Múltiplo de 3 e 5 ---");
const n = Number(prompt(" Insira um valor inteiro: "));
if(isNaN(n) || n === 0){
console.log("Erro: Certifique-se de inserir um valor numérico ");
}else{
    if(n %3 === 0 && n %5 === 0){
        console.log(`\n${n} é múltiplo de 3 e 5`);
    }else{
        console.log(`\n (Nenhum valor a ser apresentado)`);
    }
}