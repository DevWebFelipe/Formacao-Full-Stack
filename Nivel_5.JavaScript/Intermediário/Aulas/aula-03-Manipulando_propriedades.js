const product = {
  name: "Teclado",
  quantity: 100,
}

// Acessando a propriedade name do objeto product
console.log(product.name)

// Atualizando a propriedade quantity do objeto product
console.log(product.quantity)

product.quantity = 90
console.log(product.quantity)

product.quantity = product.quantity - 10
console.log(product.quantity)

product["quantity"] = product.quantity * 0.5
console.log(product.quantity)
