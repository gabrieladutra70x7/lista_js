const prompt = require('prompt-sync')();
console.log("--- Cálculo da Média e Verificação de Aprovação com Exame ---");
let n1 = Number(prompt(" Insira a primeira nota: "));
let n2 = Number(prompt(" Insira a segunda nota: "));
let n3 = Number(prompt(" Insira a terceira nota: "));
let n4 = Number(prompt(" Insira a quarta nota: "));
let media;
    if(isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4) ){
        console.log("Erro: Certifique-se de inserir valores numéricos válidos ");
    }else{
        media = (n1+n2+n3+n4)/4 

    if (media > 7){
 console.log(`\nAprovado\n Média: ${media}` );
} else if (media >=5) {
    console.log(`\nExame\n Média: ${media}`);
} else {
     console.log(`Reprovado\n Média: ${media}` );
}}
// O exemplo 2 do exercício  não segue a proposta do enunciado 