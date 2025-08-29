class Animal {
  constructor(name) {
    this.name = name
  }

  makeNoise() {
    console.log("Faz barulho")
  }
}

class Dog extends Animal {
  // não tem nada
}

const dog = new Dog("Cachorro")
console.log(dog.name)
dog.makeNoise()
