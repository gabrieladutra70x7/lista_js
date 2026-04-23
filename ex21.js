const prompt = require('prompt-sync')();

console.log("--- Cálculo da Velocida de um Projétil ---");
let dist = Number(prompt("Digite a distância percorrida em quilômetros (km): " ));
let tempo = Number(prompt("Digite o tempo em horas: " ));
let vel = dist/tempo/3.6;
console.log(`A Velocidade é: ${Math.round(vel)} m/s`);