// 2) crie uma função que receba um número e devolva uma soma progressiva. 
//Por exemplo, recebendo o número 5, a função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5.

function soma (num){
    let total = 0
    for (let i =0 ; i <=num; i++) {
        //total = total + i
        total += i   
    } 
    return total
    }
    console.log("Soma loop", soma(10))


// 3) crie um programa que pergunta seu nome. Depois que digitar o nome, o programa deverá responder 'Olá [nome]'.
// Enquanto digitar qualquer palavra, print o que foi digitado mas avise que, para sair, é só dizer 'Tchau'.
// O programa vai dizer 'Tchau [nome]' e finalizar.

const input = require("readline-sync")

function imprimeComandos () {

let nome = input.question ("Digite seu Nome  ")
console.log (`Olá, ${nome}`)
let texto = " "
do {
    texto = input.question ("Digite algo ou Tchau para sair ")
    console.log (`Você digitou: ${texto}`)
} while (texto != "Tchau")
console.log (`Tcahu ${nome}`)
}

imprimeComandos()
    