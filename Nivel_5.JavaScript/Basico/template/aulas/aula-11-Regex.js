const input = document.querySelector("input")

input.addEventListener("input", () => {
  //console.log(input.value)

  const value = input.value

  //     \D   -> Identifica caracteres que não sejam dígitos 0-9, ou seja, somente letras
  //     +    -> Identifica sequência, por ABC, já pega as 3
  //     g    -> Percorre todas as ocorrências na string
  const regex = /\D+/g

  // Retorna o valor quando valor econtrado na string estiver dentro do padrão
  // console.log(value.match(regex))

  // Testa se o valor digitado atende ao padrão estipulado no regex
  // const isValid = regex.test(value)
  // console.log(isValid)
})

const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const value = input.value
  const regex = /\D+/g

  if (regex.test(value)) {
    console.log(value)
  } else {
    alert("Padrão não econtrado na string/Valor inválido")
  }

  // todo local da string que atenda ao padrão, será substituído por X
  // const value = input.value.replace(regex, "X")

  // todo local da string que atenda ao padrão, será removido
  //const value = input.value.replace(regex, "")
})
