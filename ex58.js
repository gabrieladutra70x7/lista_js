const prompt = require('prompt-sync')();
console.log("--- Cálculo da Área Total de uma Residência ---");
let areatot = 0;
let keep = "";
do {
    let nome = prompt("Insira o nome do cômodo: ");
const comp = Number(prompt("Insira o valor do comprimento: "));
const larg = Number(prompt("Insira o valor da largura: "));

if(isNaN(comp) || isNaN(larg)){
    console.log("Erro: Certifique-se de inserir um valor numérico ");
}else{
    let areacomodo = larg * comp;
    areatot = areatot + areacomodo;   
} keep = prompt("Você deseja continuar (SIM ou NÃO)?");
} while (keep === "SIM");
    console.log(`A área total é: ${areatot}m²`);