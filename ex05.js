const prompt = require('prompt-sync')();

console.log("--- Cálculo da Quantidade de COmbustível Gasta em uma Viajem---");
let dist = Number(prompt("Digite a distância percorrida em quilômetros (km): " ));
let consumo = Number(prompt("Digite o consumo do veículo em km/l: " ));
let litros = dist/consumo;
console.log(`O Volume é: ${litros} litros`);