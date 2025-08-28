let date = new Date("1994-10-23T11:03:25")

console.log(date)
console.log(date.toLocaleString())
console.log(date.toLocaleString("en"))
console.log(date.toLocaleString("pt-BR"))
console.log("")
console.log(
  date.toLocaleString("pt-BR", {
    dateStyle: "short",
  })
)
console.log(
  date.toLocaleString("pt-BR", {
    dateStyle: "long",
  })
)
console.log(
  date.toLocaleString("pt-BR", {
    dateStyle: "medium",
  })
)
console.log(
  date.toLocaleString("pt-BR", {
    dateStyle: "full",
  })
)
console.log(
  date.toLocaleString("pt-BR", {
    day: "numeric",
  })
)
console.log(
  date.toLocaleString("pt-BR", {
    day: "2-digit",
  })
)
console.log(
  date.toLocaleString("pt-BR", {
    day: "numeric",
    month: "long",
  })
)
console.log(
  date.toLocaleString("pt-BR", {
    day: "numeric",
    month: "short",
  })
)
console.log(
  date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  })
)
console.log("")

let amount = 12.5
console.log(
  amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
)
