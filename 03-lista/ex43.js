const prompt = require('prompt-sync')();
console.log("--- Quadrados na Faixa de valores ---");
let qd;

for(let num = 15; num <= 200; num++){
    qd = Math.pow(num,2);
    console.log(`${qd}`);
}