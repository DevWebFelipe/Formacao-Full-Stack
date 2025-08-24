const creditCard = "1234123412344928"
console.log(creditCard.length)

// negativo pega do ultimo para o primneiro
// nesse exemplo, os 4 ultimos
const lastDigits = creditCard.slice(-4)
console.log(lastDigits)

// preencher com caracteres a esquerda
const maskedNumber = lastDigits.padStart(16, "X")
console.log(maskedNumber)
