const prompt = require('prompt-sync')();
console.log("--- Divisão Inteira Sem Usar o Operador de Divisão ---");
let resultado = 0;
let divd = Number(prompt("Insira o valor do dividendo: "));
let divs = Number(prompt("Insira o valor do dividor: "));
    if (isNaN (divd) || isNaN (divs) || divs === 0){
        console.log("ERRO: insira um valor numérico válido");
}else{
while (divd >= divs) {
    divd = divd - divs;
    resultado += 1;
}
    console.log(`Resultado = ${resultado}`);
}
    