const prompt = require('prompt-sync')();
console.log("--- Maior e Menor Valor entre Valores Positivos ---");
let maior = -1;
let menor = -1;
do {
    const valor = Number(prompt("Insira um valor numérico: "));

if(isNaN(valor)){
    console.log("Erro: Certifique-se de inserir um valor numérico ");
}else{
    if (valor >=0){
        if (maior < valor){
           maior = valor;  

        } 
        if (menor === -1 || menor > valor){
            menor = valor;
        }}
        else{
            break;
        }
    }
    
} while (true);
    console.log(`Maior valor = ${maior}\nMenor Valor = ${menor}`);