const prompt = require('prompt-sync')();
console.log("--- Resolução de Equação de Segundo Grau ---");
let a = Number(prompt(" Insira o valor para o coeficiente A: "));
let b = Number(prompt(" Insira o valor para o coeficiente B: "));
let c = Number(prompt(" Insira o valor para o coeficiente C: "));
let delta;
let x1;
let x2;
   if(isNaN(a) || isNaN(b) || isNaN(c)){
        console.log("Erro: Certifique-se de inserir valores numéricos válidos ");
    }else{
 delta = Math.pow(b,2) - 4 * a * c ;    
   if (delta >= 0){
    x1 = ((-b) + Math.pow(delta, 1/2)) / (2 * a);
    x2 = ((-b) - Math.pow(delta, 1/2)) / (2 * a);
 console.log(`\nX1: ${x1.toFixed(2)} \n X2: ${x2.toFixed(2)}` );
}else {
     console.log(`Não existem raízes reais` );
}}
