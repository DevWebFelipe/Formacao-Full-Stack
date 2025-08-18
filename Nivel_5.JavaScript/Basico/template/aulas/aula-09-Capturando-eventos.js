const form = document.querySelector("form")

form.onsubmit = (event) => {
  event.preventDefault()

  console.log("formulário enviado #1")
}

form.onsubmit = (event) => {
  event.preventDefault()

  console.log("formulário enviado #2")
}

form.addEventListener("submit", (event) => {
  console.log("formulário enviado #3")
})

form.addEventListener("submit", (event) => {
  console.log("formulário enviado #4")
})
