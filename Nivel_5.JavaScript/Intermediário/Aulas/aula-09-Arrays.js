const fruits = ["maça", "abacaxi", "melancia", "banana", "uva"]
console.log(typeof fruits)
console.log(fruits)
console.log(fruits.length)
console.log(fruits[0])
console.log(fruits[2])

console.log("")
// criando array com construtor

const newArray = new Array()
console.log(newArray)

// [] - Array -> JS vai dizer que é ojeto
// {} - objeto

const available = new Array(10)
console.log(available)
console.log(available.length)
console.log(available[15])

available[9] = "valor qualquer"
console.log(available[available.length - 1])

console.log("")
// transfomando texto em array
let fullName = "Felipe Texeira"
console.log(fullName)
console.log(fullName.split(" ")) // cada palvra
console.log(Array.from(fullName)) // cada letra

console.log("")

let users = []
users.push("Novo item") // adiciona algo no final do array
users.push("Item 2") // adiciona algo no final do array
users.push("Item 3") // adiciona algo no final do array
console.log(users)
users.unshift("Item 4") // adiciona algo no início do array
console.log(users)
users.pop() // remove o último item do array
console.log(users)
users.shift() // remove o primeiro item do array
console.log(users)

console.log("")

console.log(fruits)
let position = fruits.indexOf("melancia") // retorna o indice do valor
// se não achar, retorna -1

console.log(position)
console.log(fruits[position])

fruits.splice(position, 1) // exclui 1 item a partir da posição passada
console.log(fruits)

fruits.splice(1, 3) // a partir do indice 1, vai deletar 3 itens
console.log(fruits)

// arrays podem conter vários valores tipos de valores, como function, objeto etc
let myArray = [
  "Um texto",
  10,
  true,
  function () {
    console.log("Função dentro de um array")
  },
  {
    name: "Felipe",
    email: "felipe@teste.com",
  },
]

console.log(myArray)
console.log(myArray[4])

console.log(myArray[3]) // exibe a função dentro do array
myArray[3]() // executa a função dentro do array

// verificar se dentro de um array, existe algum valor específico
console.log(myArray.includes("Um texto"))
console.log(myArray.includes("Um TEXTO")) // maiusulo difere de minusculo

console.log("")
// adicionado e removendo itens ao mesmo tempo
let meses = ["Janeiro", "Fevereiro", "Segunda", "Terça"]
let dias = meses.splice(2)

console.log(dias) // ["Segunda", "Terça"]
console.log("")

let meses2 = ["Janeiro", "Fevereiro", "Segunda", "Terça"]
let dias2 = meses2.splice(2, 1)

console.log(dias2) // ["Segunda"]
console.log(meses2) // ["Janeiro", "Fevereiro", "Terça"]
console.log("")

let meses3 = ["Janeiro", "Fevereiro", "Segunda", "Terça"]
let dias3 = meses3.splice(2, 2, "Março", "Abril") // remove 3 itens a partir da posição 2 e adiciona outros 2 itens no lugar

console.log(dias3) // ["Segunda", "Terça"]
console.log(meses3) // ["Janeiro", "Fevereiro", "Março", "Abril"]
console.log("")

let mese4 = ["Janeiro", "Fevereiro", "Segunda", "Terça"]
console.log(mese4)
mese4.splice(2, 0, "Março") // adicionado um item na posição 2 sem remover nada

console.log(mese4) // ["Janeiro", "Fevereiro", "Março", "Segunda", "Terça"]

console.log("")

const array = [1, 2, 3, 4, 5]
console.log(array)

array.splice(2, 1, "x", "y", "z") // remove 1 item a partir da posição 2 e adiciona outros
console.log(array)
