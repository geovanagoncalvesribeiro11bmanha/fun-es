/* EXEMPLO 1

function mostrarAlerta () {
    let nome = "Marcio"
    alert ("Seja bem-vindo (a)" + nome)
}
mostrarAlerta()
*/

/* EXEMPLO 2
function somar (valorA, valorB){
    alert(valorA + valorB)
}
somar (20, 12)
*/

/* EXEMPLO 3
function multiplicacao (numero1, numero2){
    return numero1 * numero2
}

let multiplicacao1 = multiplicacao(6, 7)
let multiplicacao2 = multiplicacao(9, 10)
let multiplicacao3 = multiplicacao(10, 12)

console.log(multiplicacao1)
console.log(multiplicacao2)
console.log(multiplicacao3)
*/

/* EXEMPLO 4
function parOuImpar (numero){
    if (numero %2 === 0){
        return "PAR"
    }else {
        return "ÍMPAR"
    }
}
console.log(parOuImpar(100))
*/

/* EXEMPLO 5: FUNÇÃO ANÔNIMA
let numero = 10
const button = document.querySelector("button")
button.addEventListener("click", function (){
    numero++
    console.log(numero)
})
console.log (numero)
*/

/* EXEMPLO 6: arrow function
let numero = 10 
const button = document.querySelector("button")
button.addEventListener("click", () => {
    numero++
    console.log(numero)
})
console.log(numero)
*/

/* EXEMPLO 7
let somar = (valor1, valor2) => valor1 + valor2
console.log (somar(30, 7))
*/

function mensagemBoasVindas(nome, cargo){
    alert(`Seja bem-vindo (a)! ${cargo} ${nome}`)
}
mensagemBoasVindas("Caps", "Louco")