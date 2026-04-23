const prompt = require('prompt-sync')();

console.log("--- Apuração de Votos em uma Eleição Sindical ---");
let a = Number(prompt("Digite a quantidade de votos para o primeiro candidato: " ));
let b = Number(prompt("Digite a quantidade de votos para o segundo candidato: " ));
let c = Number(prompt("Digite a quantidade de votos para o terceiro candidato: "));
let nulo = Number(prompt("Digite a quantidade de votos nulos: "));
let branco = Number(prompt("Digite a quantidade de votos em branco: "));
let total = a + b + c + nulo + branco;


console.log(`Percentual do Candidato 1: ${Math.round(a/total *100)}%\n Percentual do Candidato 2: ${Math.round(b / total *100)}%\n Percentual do Candidato 3: ${Math.round(c/total * 100)}%\n Percentual de Votos Nulos: ${Math.round(nulo/total *100)}%\n Percentual de Votos em Branco: ${Math.round(branco/total * 100)}%`);