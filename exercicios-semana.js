//2) Crie uma função que receba três números e determine se um número é maior que outro.
// Exemplo:
// retornaNumMaior(10, 20, 30) // 30
 function numeroMaior (num1, num2, num3) {
     if (num1 > num2 && num1 > num3 ) {
      return num1 
     } else if (num2 > num1 && num2 > num3){
      return num2 
     }else{
       return num3
     }    
 } 
  
 console.log(numeroMaior (2, 4, 6))
