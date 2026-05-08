const prompt = require('prompt-sync')();

console.log("--- Cálculo da Velocida de um Projétil ---");
let dist = Number(prompt("Digite a distância percorrida em quilômetros (km): " ));
let tempo = Number(prompt("Digite o tempo em horas: " ));
if(isNaN(dist) || isNaN(tempo) || tempo === 0){
    console.log("Erro: Certifique-se de inserir valores numéricos ");
}else{
let vel = dist/tempo/3.6;
console.log(`A Velocidade é: ${vel.toFixed(2)} m/s`);
}