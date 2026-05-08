    const prompt = require('prompt-sync')();
console.log("--- Somatório e Média de 10 Valores ---");
    let somatorio = 0;
    let contador = 0;
    let media = 0;
while(contador < 10){
    const n = Number(prompt("Insira um valor numérico: "));
        if(isNaN(n)){
        console.log("Erro: Certifique-se de inserir um valor numérico ");
        }else{
            somatorio = somatorio + n;
            contador = contador + 1;
         media = somatorio /10;
    }
    }console.log (`Somatório = ${somatorio}; Média = ${media}`);