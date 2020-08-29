// 1) crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão), cada uma delas recebendo 2 números como parâmetros e retornando o resultado
function soma (numero1, numero2) {
    return numero1 + numero2   
 }
 function subtracao (numero1, numero2) {
     return numero1 - numero2
 }
 function multiplicacao ( numero1, numero2) {
     return numero1 * numero2
 }
 function divisao (numero1, numero2) {
     return numero1 / numero2
 }

 console.log (soma (4, 8))
 console.log (subtracao (4, 8))
 console.log (multiplicacao (4, 8))
 console.log (divisao (4, 8))


 // 2) para esse exercício, as funções de multiplicação e divisão não devem aceitar valores iguais a 0 (zero). Adicione esta lógica nas funções.
 function multiplicacaoSemZero (numero1, numero2){
    if(numero1 ===0 || numero2 ===0){
        return `não queremos zero`
    }
    return numero1 * numero2
}

console.log (multiplicacaoSemZero (5,9))

function divisaoSemZero (numero1, numero2){
    if(numero1 ===0 || numero2 ===0){
        return `não queremos zero`
    }
    return numero1 / numero2
}

console.log (divisaoSemZero(10, 5))


// 4) utilizando as funções de soma e multiplicação dos exercícios anteriores, crie uma função que resolva a conta 
//36325 * (9824 + 777).*/

function resultado (numero1, numero2, numero3) {
    return numero1 * (numero2 + numero3)   
 }
 console.log (resultado (36325, 9824, 777))


// 8) crie uma função que receba uma string como parâmetro, e retorne essa mesma string invertida. Por exemplo, 
//recebendo "reprograma", vai retornar "amargorper". Para isso, você vai ter que pesquisar como usar JavaScript para 
//inverter uma string.

function stringInvertida(string) {
    return string.split('').reverse().join('') 
}
 console.log(stringInvertida("Quando o codigo funciona é lindo! ")) 


 // 9) agora que você já sabe reverter strings, crie uma função que receba uma string, verifique se é um palíndromo e 
//retorne true ou false. Exemplo de palíndromo: "arara".

function verificaPalindro (string)
{
    if (string == string.split('').reverse().join(''))
    {
        return true

    } else 
    {
        return false
    }
    
}
console.log (verificaPalindro("Rir, o breve verbo rir."))

// 10) crie uma função que receba duas strings como parâmetros e retorne a string com a maior quantidade de caracteres.
//Por exemplo, se passarmos como parâmetro "banana" e "chocolate" a função deve retornar "chocolate"*/

function maiorQuantidadeCaracteres(palavra1, palavra2)
{
        if (palavra1.length> palavra2.length)
        {
           return palavra1  
        } else if(palavra2 > palavra2)
            return palavra2
}
console.log(`A maior Palavra é ${maiorQuantidadeCaracteres ("Determinacao","Felicidade")}`)

