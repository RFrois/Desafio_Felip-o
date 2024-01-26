let saldoVitoria;
let nivel;
let nomePernagem;


nomePernagem = "R.Frois";

saldoVitoria =  resultadoVitoria(30, 38);
nivel = calcularNivel(saldoVitoria)

if (saldoVitoria >= 0){
    
    console.log("O Herói " + nomePernagem + " tem o saldo de " + saldoVitoria + " Vitórias, " + "e está no vível de " + nivel )
} else {

    console.log("O Herói " + nomePernagem + " tem o saldo de " + (saldoVitoria * -1) + " Derrotas, " + "e está no vível de " + nivel )

}


function resultadoVitoria(vitoria, derrota) {

    let resultado = vitoria - derrota

    return resultado
    
}

function calcularNivel(saldoVitoria){

    let resultado
    if (saldoVitoria >= 0, saldoVitoria < 10){

        resultado = "Ferro"

    }else if (saldoVitoria >= 10 && saldoVitoria < 20 ){

        resultado = "Bronze"

    }else if (saldoVitoria >= 20 && saldoVitoria < 50 ){

        resultado = "Prata"

    }else if (saldoVitoria >= 50 && saldoVitoria < 80 ){

        resultado = "Ouro"

    }else if (saldoVitoria >= 80 && saldoVitoria < 90 ){

        resultado = "Diamante"

    }else if (saldoVitoria >= 90 && saldoVitoria < 100 ){

        resultado = "Lendário"

    }else if (saldoVitoria >= 100){

        resultado = "Imortal"

    }else{

        resultado = "Sem Nível"
    }

    return resultado

}




