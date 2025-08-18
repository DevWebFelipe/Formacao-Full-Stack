const input = document.querySelector("#name")

// Adicionar uma classe
input.classList.add("input-error")

// Remover uma classe
input.classList.remove("input-error")

// Se existir, remove, se não existir, adiciona
input.classList.toggle("input-error")

const button = document.querySelector("button")
button.style.backgroundColor = "red"
