function myInstanceof(instance, fn) {
  if (typeof fn !== 'function') {
    throw new Error('referance error')
  }
  // let proto = instance.__proto__
  let proto = Object.getPrototypeOf(instance) 
  let prototype = fn.prototype
  while (proto) {
    if (proto === prototype) {
      return true
    }
    proto = Object.getPrototypeOf(proto)
  }
  return false

}

console.log(myInstanceof([1, 3, 4], Array));
console.log(myInstanceof({}, Array));
console.log(myInstanceof(new Date(), Object));
console.log(myInstanceof(2, Array));



function instanceOf(instance, fn) {
  let proto = Object.getPrototypeOf(instance)
  let prototype = fn.prototype
  while (proto) {
    if (proto === prototype) {
      return true
    }
    proto = object.getPrototypeOf(proto)
  }
  
}