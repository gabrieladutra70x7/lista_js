const prompt = require('prompt-sync')();
console.log("--- Cálculo de Raiz ---");
let base = Number(prompt(" Insira o valor para a base: "));
let ind = Number(prompt(" Insira o valor para o índice da raiz: "));
if(isNaN(base) || isNaN(ind)){
    console.log("Erro: Certifique-se de inserir valores numéricos ");
}else{
console.log(`Raiz: ${Math.pow(base, 1/ind)}` );
}