const prompt = require('prompt-sync')();

console.log("--- Cálculo do Valor de uma Prestação em Atraso ---");
let vini = Number(prompt("Digite o valor original da prestação: " ));
let meses = Number(prompt("Digite o número de meses em atraso: " ));
let taxa = Number(prompt("Digite a taxa de juros mensal: " ));
    if(isNaN(vini)|| isNaN(meses) || isNaN(taxa)){
        console.log("Erro: Certifique-se de inserir valores numéricos válidos ");
    }else{
let total = vini * (1 + (taxa/100)* meses);
console.log(`O valor da prestação em atraso é: ${total} reais`);
    }