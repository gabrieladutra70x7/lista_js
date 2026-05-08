const prompt = require('prompt-sync')();
console.log("--- Verificação de Faixa de Valor ---");
const n = Number(prompt(" Insira um valor inteiro: "));
if(isNaN(n)){
console.log("Erro: Certifique-se de inserir um valor numérico ");
}else{
    if(n >= 1 && n <= 9){
        console.log(`\n${n} está na faixa permitida`);
    }else{
        console.log(`\n${n} não está na faixa permitida`);
    }
}