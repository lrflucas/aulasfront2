import random from "./random";
import verify from "./verifynumber";


let numaleatorio = random(1,10)
let numjogador = prompt("Digite um número")
let verificarnumero = verify(numjogador, numaleatorio)
let tentativas = 0

while (tentativas < 5 && verificarnumero === "igual") {
    
}
