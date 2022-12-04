

function compose(...args) {
  return function (...arg) {
    let res
    let len = args.length
    for (let i = len - 1; i >= 0; i--) {
      if (i === len - 1) {
        res = args[i](...arg)
      } else {
        res = args[i](res)
      }
    }
    return res
  }
}

function a(x) {
  return x+1
}
function b(x) {
  return x+1
}
function c(x) {
  return x+1
}
function d (x) {
  return x+1
}
const func = compose(a, b, c, d)

console.log(func(3));


// a(b(c(d('xxxx'))))简化成compose(a, b, c, d)
// const func = compose(a, b, c, d)
// func('xxx')




function compose(list) {
  // 取出第一个函数，当做deduce函数的初始值
  const init = list.shift()
  return function (...arg) {
    // 执行compose函数,返回第一个函数
    return list.reduce(
      (pre, cur) => {
        // 返回list.reduce的结果，为一个promise实例
        // 外部可以通过then获取
        return pre.then(result => {
          // pre始终为一个promise实例, result为结果的累加和
          // 在一个函数的then中,执行当前函数，并返回一个promise实例，实现结果的累加 
          return cur.call(null, result)
        })
      },
      // Promise.resolve可以将非promise实例转换为非promise实例
      Promise.resolve(init.apply(null, arg))
    )
  }
}




const add1 = (x) => x + 1;
const mul3 = (x) => x * 3;
const div2 = (x) => x / 2;
div2(mul3(add1(add1(0)))); //=>3
let result = compose(div2, mul3, add1)(5);  // 9
console.log(result);


function compose(...func) {
  return function anonymous(val) {
    // val第一个函数执行时需要的实参 0
    let length = func.length
    if (length === 0) return val
    if (length === 1) return func[0](val)
    
    return func.reverse().reduce((N, item) => {
      // 方式一
      // return item(N)
      // 方式二
      return typeof N === 'function' ? item(N(val)) : item(N)
    }, val)
  }
}