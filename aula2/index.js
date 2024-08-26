// let pi = Math.PI;
// let raio = 4;
// let area = pi * (raio ** 2);

// console.log(area)


let lado1 = 2;
let lado2 = 2;
let lado3 = 2;

if (lado1 === lado2 && lado1 === lado3){
    console.log("Triângulo equilátero")
} else if (lado1 === lado2 && lado1 !== lado3 || lado1 === lado3 && lado1 !== lado2 || lado2 === lado3 && lado2 !== lado1){
    console.log("Triângulo isósceles")
} else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3){
    console.log("Triângulo escaleno")
}