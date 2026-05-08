console.log("--- Somatório da Fatorial de Quinze Valores ---");
    let somatorio = 0;
    for(let i =1; i <= 15; i++ ){
            let fatorial = 1 
            for(let nmr = 1; nmr <= i; nmr++){
                fatorial = fatorial * nmr;
            } somatorio = somatorio + fatorial;
        console.log (`Somatório da fatorial de cada valor lido = ${somatorio}`);
    }