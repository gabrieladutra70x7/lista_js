console.log("--- Somatório de Grãos de Trigo no Tabuleiro de Xadrez ---");
let tot = 0;
let quadro = 1;

   while(quadro <= 64){
        let graosq = Math.pow(2, (quadro - 1)); 
        tot = tot + graosq

       quadro = quadro + 1;
    } console.log (`Total de grãos de trigo no tabuleiro de xadrez = ${tot}`);
        