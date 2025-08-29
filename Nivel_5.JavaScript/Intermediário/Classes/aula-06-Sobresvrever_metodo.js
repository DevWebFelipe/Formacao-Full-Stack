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

class Cat extends Animal {
  // mesa coisa que o override
  makeNoise() {
    console.log("Miau miau")
  }

  run() {
    console.log("Correndo")
  }
}

const dog = new Dog("Cachorro")
console.log(dog.name)
dog.makeNoise()

console.log("")

const cat = new Cat("Gato")
console.log(cat.name)
cat.makeNoise()
cat.run()
