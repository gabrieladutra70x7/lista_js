const prompt = require('prompt-sync')();

console.log("--- Adição e Multiplicação de Quatro Números Inteiros ---");
let a = Number(prompt("Digite o primeiro valor: " ));
let b = Number(prompt("Digite o segundo  valor: " ));
let c = Number(prompt("Digite o terceiro valor: " ));
let d = Number(prompt("Digite o quarto valor:" ));
    if(isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)){
    console.log("Erro: Certifique-se de inserir valores numéricos ");
}else{
console.log(`\n\nProduto: ${a}*${c} = ${a*c}\n`);
console.log(`Soma: ${b}+${d} = ${b+d}\n`);
}