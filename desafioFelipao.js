/*
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

let nome = "Rafael"
let nivel
let xp = 0

if (xp >=0 && xp < 1000){

    nivel = "FERRO"

}else if (xp >= 1000 && xp < 2000){

    nivel = "BRONZE"

}else if (xp >= 2000 && xp < 2000){

    nivel = "PRATA"

}else if (xp >= 5000 && xp < 7000){

    nivel = "OURO"

}else if (xp >= 7000 && xp < 8000){

    nivel = "PLATINA"

}else if (xp >= 8000 && xp < 9000){

    nivel = "ASCENDENTE"

}else if (xp >= 9000 && xp < 10000){

    nivel = "IMORTAL"

}else if (xp >= 10000 ){

    nivel = "RADIANTE"

}else {

    console.log("Treine o " + nome)
}

console.log("O Herói " + nome + " " + "está no nível de " + nivel)
