console.log(new Date(0)) // primeida data usada como referencia para o js

console.log("")

console.log(new Date()) // data e hora atual com várias informações extras, fuso, local etc....

console.log("")

console.log(new Date().getTime()) // quantidade de milissegundos transcorridos desde a data padrão do JS

console.log("")

// mes começa do zero, então se quer mes 7 tem que enviar mes 6
console.log(new Date(2022, 6, 2)) // ano, mes(0-11), dia

console.log("")

// definir data e hora, ano, mes, dia, hora, minutos, segundos
console.log(new Date(2022, 6, 2, 10, 30, 15))

console.log("")

// definir data e hora com string, T separa data da hora
console.log(new Date("2022-07-02T10:30:00"))

console.log("")

// definir data (MUITA ATENÇÃO: se não definir hora, vai pegar 00:00:00 porém o fuso é -3:00 então vai acabar indo para as 21h do dia anterior ao dia informado)
console.log(new Date("2022-07-02"))

console.log("")

// definir data e hora como string e por extenso
console.log(new Date("July 2, 2022 10:30:15"))
