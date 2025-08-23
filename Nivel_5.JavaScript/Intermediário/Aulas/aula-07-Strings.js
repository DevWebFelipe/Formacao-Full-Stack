let value = 0
let texto = ""

/* Strings */
texto = "transforma tudo em maiuscula"
console.log(texto.toUpperCase())

texto = "transforma tudo em minuscula"
console.log(texto.toLowerCase())

texto = "Descobrindo o comprimento de uma string"
console.log(texto.length) // é uma propriedade, não um método, por isso não precisa executar - ()

value = 12345
console.log(typeof value)
console.log(typeof String(value))
console.log(String(value).length)
console.log(value.toString().length)

// substituindo parte de um texto
texto = 'Substituir a 1ª letras "t" pelo número "4"'
console.log(texto.replace("t", "4"))

// pegando uma parte da string
console.log(texto.slice(0, 10)) // pega da posição 0, 10 casas para frente
