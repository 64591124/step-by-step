Function.prototype.apply = function (context, args) {
  context = context || window
  let fn = Symbol()
  context[fn] = this
  let res = context[fn](...args)
  delete context[fn]
  return res
}

Function.prototype.call = function (context, ...args) {
  context = context || window
  let fn = Symbol()
  context[fn] = this
  let res = context[fn](...args)
  delete context[fn]
  return res
}


Function.prototype.bind = function (context, ...args) {
  context = context || window
  let f = Symbol(), self = this
  return function fn(...arg) {
    if (this instanceof fn) {
      this[f] = self
      this[f](...args, ...arg)
      delete this[f]
    } else {
      context[f] = self
      context[f](...args, ...arg)
      delete context[f]
    }
  }
}


Function.prototype.call = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new Error('type error')
  }
  context = context || window
  let fn = Symbol()
  context[fn] = this
  let res = context[fn](...args)
  delete context[fn]
  return res
}

Function.prototype.call = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new Error('type error')
  }
  context = context || window
  let fn = Symbol()
  context[fn] = this
  let res = context[fn](...args)
  delete context[fn]
  return res
}

Function.prototype.bind = function (context, args) {
  context = context || window
  let f = Symbol(), self = this

  return function fn(...args) {
    if (this instanceof fn) {
      this[f] = self
      this[f](...args)
      delete this[f]
    } else {
      context[f] = self
      context[f](...args)
      delete context[f]
    }
    ret
    
  }
}