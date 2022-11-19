let obj = {
  name: 'hlb',
  age: 20
}

const object = {}
for (let key in obj) {
  Object.defineProperty(object, key, {
    get() {
      console.log('读取了get属性');
      // return Reflect.get(object, key, obj)
      return obj[key]
    },
    set(value) {
      console.log('设置了key属性');
      // return Reflect.set(object, key, value)
    }
  })
}


console.log(obj.age);
obj.name = 'hhhhh'
console.log(obj.name);
console.log(object.age);
object.name = 'kkkkk'
