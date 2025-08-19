const input = document.querySelector("input")

/*
input.addEventListener("keydown", (event) => {
  console.log(event.key)
})
*/

/*
  keydow - pega qualquer tecla (ctrl, shift, letras, numeros, pontos....)
  keypress - pega somente tecla de caractere (letras, numeros, pontos....)
*/

input.addEventListener("keypress", (event) => {
  console.log(event)
})

// ele é disparado ao sair do input, diferente do delphi que aciona a cada alteração do valor do input
input.onchange((event) => {
  console.log("o valor do input mudou")
})
