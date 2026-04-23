console.log("--- Sequência de Fibonacci ---");
let termo1 = 1;
let termo2 = 1;
let prox;
    console.log(`${termo1} \n${termo2}`);
let i = 3;
   while(i <= 15){
        prox = termo1 + termo2; 
        console.log (`${prox}`);
       termo1 = termo2;
       termo2 = prox;
       i = i + 1;
    }
