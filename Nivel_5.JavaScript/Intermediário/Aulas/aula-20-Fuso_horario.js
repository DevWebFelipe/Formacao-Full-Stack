/*  

  data de referência do JS = 00h 01/01/1970
  como estamos no fuso brasileiro, pega 3h a menos
  então seria 21h de 31/12/1969
  o padrão é o UTC (tempo universal coordenado)

*/

/*

  Intl - API de Internacionalização do ECMAScript

*/

// Informações sobre a localidade
const currentLocale = Intl.DateTimeFormat().resolvedOptions()
console.log(currentLocale)

console.log("")

// formatação de acordo com a localidade
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()))
console.log(new Intl.DateTimeFormat("en-US").format(new Date()))

// diferença entre fuso horários
let date = new Date()
console.log(date)
console.log(date.getTimezoneOffset()) // retorna a diferença em minutos
console.log(date.getTimezoneOffset() / 60) // mostrando em horas

// criado data e hora levando em consideração o fuso horário
console.log("")
const dateWithTimezoneFuso = new Date("2025-08-28T23:29:59.125+03:00")
const dateWithTimezone = new Date("2025-08-28T23:29:59.125")
// console.log(dateWithTimezone.toISOString())
console.log(dateWithTimezone.toLocaleString())
console.log(dateWithTimezoneFuso.toLocaleString())
