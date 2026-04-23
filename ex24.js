const prompt = require('prompt-sync')();

console.log("--- Cálculo do Volume da Lata de Óleo---");
let pes = Number(prompt("Digite a medida em pés: " ));
let m = pes * 0.3048;
console.log(`O Volume (aprox.) é: ${Math.round(m)}m `);
