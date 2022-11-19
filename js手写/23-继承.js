// 原型链继承
function Animal(name) {
  this.name = name
  this.color = ['red', 'pink']
}
Animal.prototype.getColor = function () {
  return this.color
}

function Dog() { }
Dog.prototype = new Animal()
let dog1 = new Dog('dog1')
let dog2 = new Dog('dog2')
dog2.color.push('blue')
console.log(dog1.color);



// 构造函数继承
function Animal(name) {
  this.name = name
  this.color = ['red', 'pink']
}
Animal.prototype.getColor = function () {
  return this.color
}
function Cat(name) { 
  Animal.call(this, name)
}
Cat.prototype = new Animal()

Cat.prototype.constructor = Cat

let cat1 = new Cat('mimi')
let cat2 = new Cat('momo')
cat1.color.push('blue')
console.log(cat2.getColor());


// 寄生组合继承
Animal.prototype.getColor = function () {
  return this.color
}
function Cat(name) { 
  Animal.call(this, name)
}
Cat.prototype = Object.create(Animal.prototype)

Cat.prototype.constructor = Cat