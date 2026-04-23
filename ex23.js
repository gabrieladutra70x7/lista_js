const prompt = require('prompt-sync')();

console.log("--- Cálculo do Volume da Lata de Óleo---");
const raio = Number(prompt("Digite o valor do raio: " ));
let Volume;
if(isNaN(raio)){
    console.log("Erro: Certifique-se de inserir um valor numérico ");
}else{
let Volume = Math.PI * (4/3) * Math.pow(raio, 3);
console.log(`O Volume é: ${Volume.toFixed(2)} cm³`);
}
