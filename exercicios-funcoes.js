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

