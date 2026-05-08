const prompt = require(`prompt-sync`)();
console.log("Cálculo das Quatro Operações Básicas");
let num1 =  Number(prompt("Insira um valor numérico "));
let num2 =  Number(prompt("Insira o segundo valor numérico "));
if(isNaN(num1) || isNaN(num2)){
    console.log("Erro: Certifique-se de inserir valores numéricos ");
}else if (num2 === 0){
    console.log(`Adição: ${num1} + ${num2} = ${num1 + num2} \n Diferença: ${num1} - ${num2} = ${num1 - num2}`);
    console.log(`Multiplicação: ${num1} * ${num2} = ${num1*num2} \n Divisão: Resultado Inválido`);
}else{
        console.log(`Adição: ${num1} + ${num2} = ${num1 + num2} \n Diferença: ${num1} - ${num2} = ${num1 - num2}`);
    console.log(`Multiplicação: ${num1} * ${num2} = ${num1*num2} \n Divisão: ${num1} / ${num2} = ${num1/num2}`);

}