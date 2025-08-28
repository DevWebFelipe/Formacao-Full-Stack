let date = new Date("2022-07-07T10:30:15")

// formatando datas

// completando o dia do mes com 0 a esquerda para sempre ter 2 dígitos
console.log(date.getDate().toString().padStart(2, "0"))

// lebrando que mes, começa de 0 até 11 então precisa do + 1
console.log((date.getMonth() + 1).toString().padStart(2, "0"))

console.log((date.getDay() + 1).toString().padStart(2, "0"))

let day = date.getDay()
let month = date.getMonth()
let year = date.getFullYear()
let houer = date.getHours()
let minute = date.getMinutes()

console.log(`${day}/${month}/${year}`)
console.log(
  `${(day + 1).toString().padStart(2, "0")}/` +
    `${(month + 1).toString().padStart(2, "0")}/` +
    `${year} às ${houer}:${minute}`
)

console.log("")
console.log(date)
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toTimeString())
console.log("")
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())
console.log(`${date.toLocaleDateString()} às ${date.toLocaleTimeString()}`)
console.log(date.toLocaleDateString("en"))
console.log(date.toLocaleDateString("pt-BR"))
console.log(date.toLocaleTimeString("en"))
console.log(date.toLocaleTimeString("pt-BR"))
console.log("")
