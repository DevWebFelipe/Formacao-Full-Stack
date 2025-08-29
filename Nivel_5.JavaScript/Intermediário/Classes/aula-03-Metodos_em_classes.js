class User {
  constructor(name, email) {
    this.name = name
    this.email = email
  }

  sendEmail() {
    console.log(
      "E-mail enviado para",
      this.name,
      "no o endereço eletrônico",
      this.email
    )
  }
}

const user = new User("Felipe", "felipe@email.com")

user.sendEmail()
