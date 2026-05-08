const prompt = require('prompt-sync')();
console.log("--- Par ou Ímpar ---");
const n = Number(prompt(" Insira um valor inteiro: "));
if(isNaN(n)){
console.log("Erro: Certifique-se de inserir um valor numérico ");
}else{
    if(n %2 === 0){
        console.log(`\n${n} é PAR`);
    }else{
        console.log(`\n${n} é ÍMPAR`);
    }
}