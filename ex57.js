console.log("--- Fatorial dos Valores Ímpares entre 1 e 100 ---");
    let resultado = 1n;
    for(let imp =1; imp <= 100; imp+=2 ){
            for(let valor = 1; valor <= imp; valor++){
                resultado = resultado * BigInt(valor);
            }
    }console.log (resultado.toString());