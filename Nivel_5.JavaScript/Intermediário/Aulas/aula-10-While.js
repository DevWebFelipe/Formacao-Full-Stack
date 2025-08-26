let execute = 1

while (true) {
  console.log(execute)

  execute++

  if (execute > 5) {
    break
  }
}

execute = 1

while (execute <= 5) {
  console.log(execute)

  execute++
}

execute = true

while (execute) {
  let response = window.prompt("Deseja continuar: 1 (SIM) ou 2 (NÃO)")

  if (response === "2") {
    execute = false
  }
}
