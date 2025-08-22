/*

  OPERADOR DE COALESCÊNCIA NULA (??)
  Operador lógico que retorna o seu operando do lado direito
  quando o seu operador do lado esquerdo é null ou undefined
  Caso contrário, ele retorna o seu operando do lado esquerdo
  (mesma coisa que o coalesce do SQL)

*/

// apenas null ou undefined
// let content = true
// let content = ''
// let content = null
let content = undefined

console.log(content ?? "Conteúdo padrão")
content = "Qualquer valor"
console.log(content ?? "Conteúdo padrão")

const user = {
  name: "Felipe",
  avatar: undefined,
}

console.log(user.avatar ?? "default.png")
