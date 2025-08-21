// Criar um objeto vazio
const obj = {}
console.log(obj)
console.log(typeof obj)

console.log("")
// Criar um objeto com propriedades e métodos
const user = {
  email: "felipe.flptxr@gmail.com",
  age: 18,
  // estrutura de aninhamento, um objeto dentro do outro
  name: {
    first_name: "Felipe",
    surname: "Texeira",
  },
  address: {
    city: "Gravatal",
    street: "Rua geral",
    number: 50,
    postal_code: "89800-000",
  },
  messageArrow: () => {
    console.log("Método criado com arrow function")
  },
  messageAnonimous: function () {
    console.log("Método criado com função anonima")
  },
}

console.log(user)
console.log(typeof user)
console.log("")
user.messageAnonimous()
user.messageArrow()
console.log("")
console.log(user.name.first_name)
console.log(user.name.surname)
