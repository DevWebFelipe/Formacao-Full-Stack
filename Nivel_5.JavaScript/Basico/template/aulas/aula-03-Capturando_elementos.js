// Atribuindo o caminho completo, o textContext não vai mais trocar o elemento span
const guestSpan = document.querySelector("#guest-1 span")
console.log(guestSpan.textContent)

// Vai trocar tudo, inclusive tags que estiverem ali, como o span
guestSpan.textContent = "Felipe"
console.log(guestSpan.textContent)
console.log(guestSpan)

const guest = document.querySelector("#guest-1")

console.log("textContent -> " + guest.textContent) // Retorna o conteúdo visível e oculto(hide)
console.log("innerText   -> " + guest.innerText) // Retorna o conteúdo visível
console.log("innerHTML   -> " + guest.innerHTML) // Retorna o HTML como texto
