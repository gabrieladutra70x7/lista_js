const prompt = require('prompt-sync')();

console.log("--- Cálculo da Quantidade de COmbustível Gasta em uma Viajem---");
let dist = Number(prompt("Digite a distância percorrida em quilômetros (km): " ));
let consumo = Number(prompt("Digite o consumo do veículo em km/l: " ));
if(isNaN (dist) || isNaN (consumo) || consumo === 0){
    console.log("Erro: Certifique-se de inserir valores numéricos válidos ");
}else{

    let litros = dist/consumo;
console.log(`O Volume é: ${litros} litros`);
}