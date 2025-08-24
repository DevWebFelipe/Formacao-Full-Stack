const creditCard = "1234123412344928"
console.log(creditCard.length)

// negativo pega do ultimo para o primneiro
// nesse exemplo, os 4 ultimos
const lastDigits = creditCard.slice(-4)
console.log(lastDigits)

// preencher com caracteres a esquerda
const maskedNumber = lastDigits.padStart(16, "X")
console.log(maskedNumber)

const maskedEndNumber = lastDigits.padEnd(10, "#")
console.log(maskedEndNumber)

console.log("")
// aula 08
let text = "Estudar, Aprender, Praticar"
let separate = text.split(",")
console.log(text)
console.log(separate)
console.log(separate[0])

let joined = separate.join(" - ")
console.log(joined)
