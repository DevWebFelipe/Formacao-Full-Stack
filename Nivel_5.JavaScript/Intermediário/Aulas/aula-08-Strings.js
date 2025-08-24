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

console.log("")
// aula 09

const message = "Estou estudando os fundamentos de javascript"

// obter a posição inicial da palavra
// se não econtrar, retorna -1
// Tudo que foi visto, é extamente igual o Delphi, só muda a forma de escrever
// ou seja, a lógica usada, será a mesma em qualquer linguagem, só a sintaxe
// que muda, o mesmo vale para todo o resto que foi visto, objetos, classes,
// tipos de dados, array etc... a lógica é a mesma
// .slice = Copy
// .split = SplitString
// .padEnd e .padStart = (função interna StrZero por exe)
// .indexOF = Pos
// .includes = (Pos() > 0)
// .joined = (função interna JuntarString)
// alguns dos exemplos acima, não tem métdos nativos, mas tem métodos
// próprios que podem ser criados para fazer a mesma coisa
console.log(message.indexOf("estudando"))
console.log(message.includes("fundamentos")) // True
console.log(message.includes("qulquer coisa")) // False
console.log(message.toUpperCase().includes("JAVASCRIPT")) // True
