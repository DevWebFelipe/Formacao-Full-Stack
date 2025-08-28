function createProduct(name) {
  const product = {}

  product.name = name
  product.details = function () {
    console.lot(`O nome do produto é ${this.name}`)
  }

  return product
}

const product1 = new createProduct("produto 1")
console.log(product1.name)
product1.details

const product2 = new createProduct("produto 2")
console.log(product2.name)
product2.details

// Exemplos de funções construtoras disponíveis no próprio JavaScript
let myName = new String("Rodrigo")
console.log(myName)

let price = "40.6".replace(".", "")
console.log(price)

let date = new Date("2024-1-1")
console.log(date)

// outra forma de criar funções construtoras (não convencional, JS sugere criar classes nesse caso)

function Person(name) {
  this.name = name
  this.message = function () {
    console.log(`Olá, ${this.name}`)
  }
}

const person1 = new Person("Felipe")
console.log(person1)
person1.message()

const person2 = new Person("Isis")
console.log(person2)
person2.message()
