/*

  OPITIONAL CHAINING (?.) - encadeamento opcional
  Se a propriedade ou função/procedure chamada é nullish
  (null or undefined), a expressão retorna undefined em 
  vez de gerar um erro.

  Útil ao explorar o conteúdo de um objeto quando não
  existe garantia da existência de determinadas 
  propriedades obrigatórias.

*/

const user = {
  id: 1,
  name: "Felipe",
  /*

  address: {
    street: "Rua geral",
    city: "Gravatal",
    geo: {
      latitude: 47.808,
      longitude: 14.5674,
    },
  },

  message: function () {
    console.log(`Olá ${this.name}`)
  },

  */
}

// A cada propriedade que pode não existir, ou seja, é opicional
// coloca-se o '?' antes de chamar ela
console.log(user?.address)
console.log(user?.address?.street)
console.log(user.message?.())
