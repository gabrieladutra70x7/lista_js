const prompt = require(`prompt-sync`)();
console.log("Cálculo das Quatro Operações Básicas");
let num1 =  Number(prompt("Insira um valor numérico "));
let num2 =  Number(prompt("Insira o segundo valor numérico "));
console.log(`Adição: ${num1} + ${num2} = ${num1 + num2} \n Diferença: ${num1} - ${num2} = ${num1 - num2}`);
console.log(`Multiplicação: ${num1} * ${num2} = ${num1*num2} \n Divisão: ${num1} / ${num2} = ${num1/num2}`);