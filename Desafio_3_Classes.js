/*


*/

class heroi {
    constructor(nome, idade, tipo){

        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    comparar(tipo){

        let profissao = tipo

        if (profissao.toLowerCase() == "mago"){
            profissao = "Mago"
        }else if (profissao.toLowerCase() == "guerreiro"){
            profissao = "Guerreiro"
        }else if (profissao.toLowerCase() == "monge"){
            profissao = "Monge"
        }else if (profissao.toLowerCase() == "ninja"){
            profissao = "Ninja"
        }else {
            profissao = "Escolha uma Profissão válida"
        }

        return profissao
    }


    concatenar(tipo){

        let ataque = tipo

        if (ataque.toLowerCase() == "mago"){
            ataque = "Magia"
        }else if (ataque.toLowerCase() == "guerreiro"){
            ataque = "Espada"
        }else if (ataque.toLowerCase() == "guerreiro"){
            ataque = "Espada"
        }else if (ataque.toLowerCase() == "monge"){
            ataque = "Artes Marciais"
        }else if (ataque.toLowerCase() == "ninja"){
            ataque = "Shuriken"
        }else {
            ataque = "Não atacou"
        }
        

        return ataque
    }



    escrever(){

 
        console.log("O " + this.comparar(this.tipo)+ " atacou usando " + this.concatenar(this.tipo))
    }
}






let heroi1 = new heroi("Rafael", "35", "mago")
let heroi2 = new heroi("Matheus", "29", "monge")

heroi1.escrever()
heroi2.escrever()