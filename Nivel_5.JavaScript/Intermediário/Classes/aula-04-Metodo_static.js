class User {
  showMessage() {
    console.log("Precisa criar a classe para enviar")
  }

  // é tupo usar class procedure e class function no Delphi
  // assim como no delphi, o que é static não pode depender de nada que esteja ligado ao constuctor, pois vai dar AV/indefined
  static showOtherMessage() {
    console.log("Envia sem precisar criar a classe")
  }
}

const user = new User()
user.showMessage()

User.showOtherMessage()
