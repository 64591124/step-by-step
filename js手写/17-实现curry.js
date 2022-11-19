function curry(fn) {
  if (typeof fn !== 'function') {
    throw new ReferenceError('参数类型错误')
  }
  const len = fn.length
    return function curried(...args1) {
      if (args1.length >= len) {
        return fn(...args1)
      } else {
        return function (...arg) {
          return curried(...args1, ...arg)
        }
      }
    }
}

function fn(a, b, c, d) {
  return a + b + c + d
}

let fnn = curry(fn)
console.log(fnn(1,2,3));
console.log(fnn(1,2,3, 4));
console.log(fnn(1)(2)(3));

/**
 *   不固定参数
 */

function curry1(fn1, ...arg1) {
  let arg = arg1
  console.log(arg1);
  let temp = function (...arg2) {
    arg = arg.concat(arg2)
    return curry1(fn1, ...arg)
  }
  temp.tostring = function () {
    console.log('aaa',arg);
    return fn1.apply(null, arg)
  }
  return temp
}
function fn1(...rest) {
  console.log(rest,'b');
  return rest.reduce((pre, cru) => {
    return pre + cru;
  }, 0);
}
let test = curry1(fn1);
console.log(test(1)(2,5,6, 3)(4).tostring());



function curry(fn) {
  let len = args.length
  return function curried(...args) {
    if (len >= fn.length) {
      return fn(...args)
    } else {
      return function (...args1) {
        return curried(...args, ...args1)
      }
    }
  }
}


function curry(fn, ...args) {
  let temp = function (...args1) {
    let arg = args.concat(...args1)
    return curry(fn, arg)
  }
  temp.toString = function () {
    return fn.apply(null, args)
  }
}