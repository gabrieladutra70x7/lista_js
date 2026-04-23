const prompt = require('prompt-sync')();

console.log("--- Cálculo do Volume da Lata de Óleo---");
let pes = Number(prompt("Digite a medida em pés: " ));
if(isNaN(pes)){
    console.log("Erro: Certifique-se de inserir um valor numérico ");
}else{
    let m = pes * 0.3048;
console.log(`O Volume (aprox.) é: ${m.toFixed(1)}m `);
}