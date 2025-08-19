const input = document.querySelector("input")
const form = document.querySelector("form")

form.onsubmit = (event) => {
  event.preventDefault()

  const value = input.value
  //         \d     -> valida se tem número na string recebida
  const hasNumberRegex = /\d+/g

  if (hasNumberRegex.test(value)) {
    alert("Texto inválido, não pode ser digitado números")
  } else {
    alert("Cadastro inserido com sucesso")
  }
}
