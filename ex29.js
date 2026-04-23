const prompt = require('prompt-sync')();
console.log("--- Classificação de Número Positivo ou Negativo  ---");
let num = Number(prompt(" Insira um valor númerico inteiro "));

if (num > 0){
 console.log(`Positivo` );
}else if (num < 0){
     console.log(`Negativo` );
}else {
console.log(`Neutro` );
}

