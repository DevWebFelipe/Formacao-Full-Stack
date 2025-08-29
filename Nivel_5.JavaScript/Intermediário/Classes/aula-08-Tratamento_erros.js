let obj = []
let index = 300

try {
  obj.execute()
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Método indisponível")
  }

  console.log(error)
}

console.log("")
console.log("")

try {
  if (!obj.includes(17)) {
    throw new Error("O número 17 não está disponível no array")
  }
} catch (error) {
  console.log(error)
}

console.log("")
console.log("")

try {
  if (index > 99) {
    throw new RangeError(
      "Número está fora do intervalo, escolha um número entre 0 e 99"
    )
  }
} catch (error) {
  if (error instanceof RangeError) {
    console.log("Valor fora da faixa permitida")
  }

  console.log(error)
}

console.log("")
console.log("")

try {
  if (!obj.includes(17)) {
    throw new Error("O número 17 não está disponível no array")
  }
} catch (error) {
  console.log(error.message)
}
