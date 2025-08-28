let person = {
  name: "Felipe",
  surname: "Texeira",
  email: "felipe@email.com",
}

for (let property in person) {
  // mostra o nome da propriedade
  console.log(property)

  // mostra o valor da propriedade
  console.log(person[property])

  console.log("")
}

let students = ["aluno 1", "aluno 2", "aluno 3"]

for (let index in students) {
  console.log(index)
  console.log(students[index])
  console.log("")
}

for (let student of students) {
  console.log(student)
  console.log("")
}
