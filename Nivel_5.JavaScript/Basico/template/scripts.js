const guests = document.querySelector("ul")

const newGuest = document.createElement("li")
newGuest.classList.add("guest")

const guestName = document.createElement("span")
guestName.textContent = "Felipe"

const guestSurname = document.createElement("span")
guestSurname.textContent = "Texeira"

const beforeName = document.createElement("span")
beforeName.textContent = "Vem antes de tudo"

newGuest.append(guestName, guestSurname)
newGuest.prepend(beforeName)
//console.log(newGuest) feito só para testar
guests.append(newGuest)

// forma mais simples que o append, porém só aceita 1 por vez
const newGuest2 = document.createElement("li")
newGuest2.classList.add("guest")

const guestName2 = document.createElement("span")
guestName2.textContent = "Felipe"

const guestSurname2 = document.createElement("span")
guestSurname2.textContent = "Texeira"

newGuest2.appendChild(guestName2)
newGuest2.appendChild(guestSurname2)
//console.log(newGuest2) feito só para testar
//adicionar o novo sempre no topo com prepend
guests.prepend(newGuest2)
