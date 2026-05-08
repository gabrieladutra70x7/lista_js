const prompt = require('prompt-sync')();
console.log("--- Cálculo do Quadrado de um Número Inteiro  ---");
const num = Number(prompt(" Insira um valor númerico inteiro"));
let quad;
if(isNaN(num)){
    console.log("Erro: Certifique-se de inserir um valor numérico ");
}else{
    quad = Math.pow(num,2); 
    console.log(`Quadrado = ${quad}` );
}