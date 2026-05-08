const prompt = require('prompt-sync')();

console.log("--- Adição e Multiplicação de Quatro Números Inteiros ---");
let a = Number(prompt("Digite o primeiro valor: " ));
let b = Number(prompt("Digite o segundo  valor: " ));
let c = Number(prompt("Digite o terceiro valor: " ));
let d = Number(prompt("Digite o quarto valor: " ));
    if(isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) ){
        console.log("Erro: Certifique-se de inserir valores numéricos válidos ");
    }else{
console.log(`Adições: ${a}+${b} = ${a+b}\n ${a}+${c} = ${a+c}\n${a}+${d} = ${a+d}\n${b}+${c} = ${b+c}\n${b}+${d} = ${b+d}\n${c}+${d} = ${c+d}\n`);
console.log(`Multiplicações: ${a}*${b} = ${a*b}\n ${a}*${c} = ${a*c}\n${a}*${d} = ${a*d}\n${b}*${c} = ${b*c}\n${b}*${d} = ${b*d}\n${c}*${d} = ${c*d}\n`);
    }