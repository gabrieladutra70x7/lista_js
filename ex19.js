const prompt = require('prompt-sync')();

console.log("--- Apuração de Votos em uma Eleição Sindical ---");
let a = Number(prompt("Digite a quantidade de votos para o primeiro candidato: " ));
let b = Number(prompt("Digite a quantidade de votos para o segundo candidato: " ));
let c = Number(prompt("Digite a quantidade de votos para o terceiro candidato: "));
let nulo = Number(prompt("Digite a quantidade de votos nulos: "));
let branco = Number(prompt("Digite a quantidade de votos em branco: "));
    if(isNaN(a) || isNaN(b) || isNaN(c) || isNaN(nulo) || isNaN(branco)){
    console.log("Erro: Certifique-se de inserir valores numéricos ");
}else{
    let total = a + b + c + nulo + branco;
console.log(`Percentual do Candidato 1: ${(a/total *100).toFixed(2)}%\n Percentual do Candidato 2: ${(b / total *100).toFixed(2)}%\n Percentual do Candidato 3: ${(c/total * 100).toFixed(2)}%\n Percentual de Votos Nulos: ${(nulo/total *100).toFixed(2)}%\n Percentual de Votos em Branco: ${(branco/total * 100).toFixed(2)}%`);
}