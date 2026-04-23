const prompt = require('prompt-sync')();
console.log("--- Verificação de Valor Menor ou Igual a 3 ---");
const n = Number(prompt(" Insira um valor inteiro: "));
if(isNaN(n)){
console.log("Erro: Certifique-se de inserir um valor numérico ");
}else{
    if(n <= 3){
        console.log(`\n${n}`);
    }else{
        console.log(`\n (Nenhum valor a ser apresentado)`);
    }
}