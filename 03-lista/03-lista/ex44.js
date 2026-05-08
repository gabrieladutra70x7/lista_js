const prompt = require('prompt-sync')();
console.log("--- Tabuada de um Número ---");

const n = Number(prompt("Insira um valor numérico: "));

if(isNaN(n)){
    console.log("Erro: Certifique-se de inserir um valor numérico ");
}else{
    for(let mult = 1; mult <= 10; mult++){
        console.log(`${n * mult}`);
    }
}