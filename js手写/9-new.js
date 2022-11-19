function newFn(fn, ...args) {
  if (typeof fn !== 'function') {
    throw TypeError('reference error')
  }
  let obj = Object.create(fn.prototype)
  let res = fn.call(obj, ...args)
  return typeof res === 'object' ? res : obj
  
}

function newFn(fn, ...args) {
  if (typeof fn !== 'function') {
    throw new Error('type error')
  }
  const obj = Object.create(fn.prototype) 
  const value = fn.apply(obj, args)
  return value instanceof Object ? value : obj
}

console.log(newFn(6));


function create(obj) {
  function F() { }
  F.prototype = obj
  return new F()
}