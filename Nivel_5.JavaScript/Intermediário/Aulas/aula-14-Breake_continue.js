for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break
  }

  console.log(i)
}

console.log("")

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Pulou o 5")
    continue
  }

  console.log(i)
}
