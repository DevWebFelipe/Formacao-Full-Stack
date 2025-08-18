addEventListener("click", (event) => {
  // Remove o comportamento padrão do elemento clicado
  event.preventDefault()

  // Retorna todas as informações do evento
  console.log(event)

  // Retorna o elemento clicado
  console.log(event.target)

  // Retorna o conteúdo do elemento clicado
  console.log(event.target.textContent)
})
