// Visualizar o conteúdo do document
//console.log(document)

// Obter o conteúdo title da página
console.log(document.title)
console.log(document.body)

// Selecionar por ID
const guest = document.getElementById("guest-2")
console.log(guest)

// Mostra as propriedades do objeto
console.dir(guest)

// Selecionar por class (reterona como lista)
const guestsByClass = document.getElementsByClassName("guest")
console.log(guestsByClass)

// Como retornou como lista, pode ser acessado pelo índice
console.log(guestsByClass.item(0))
// Qualquer uma das duas formas vai funcionar
console.log(guestsByClass[1])

// Selecionar uma lista de elementos pela tag
const guestsByTag = document.getElementsByTagName("li")
console.log(guestsByTag)
