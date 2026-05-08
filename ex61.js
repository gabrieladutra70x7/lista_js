const prompt = require('prompt-sync')();
console.log("--- Quadrados dos Valores Inteiros de 15 a 200 Contando de 3 em 3 ---");
let n = 15;

while (n <= 200) {
    let qd = Math.pow(n,2)
    console.log(`${qd}`);
    n += 1;
}
    