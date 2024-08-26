let num1 = 5;
let num2 = 0;

let operador = "+";

let adição = num1 + num2
let subtração = num1 - num2
let multiplicação = num1 * num2
let divisão = num1 / num2
let resultado = 0

console.log("O 1º número é "+num1, "e o 2º número é "+num2)

switch (operador) {
    case "+":
        resultado = adição
        console.log("O operador é: "+operador)
        break
    case "-":
        resultado = subtração
        console.log("O operador é: "+operador)
        break
    case "*":
        resultado = multiplicação
        console.log("O operador é: "+operador)
        break
    case "/":
        if (num2 === 0){
            console.log("Não é possível dividir por 0")
        } else {
            resultado = divisão
            console.log("O operador é: "+operador)
        }
        break
    default:
        console.log("Operador inválido")
}

console.log("Resultado: "+resultado)
