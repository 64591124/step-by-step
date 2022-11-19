Promise.prototype.finally1 = function (cb) {
  return this.then((val) =>{
    return Promise.resolve(cb()).then(() => val)
  }).catch((err) => {
    return Promise.resolve(cb()).then(() => {
      throw new Error(err)
    })
  })
}

new Promise((resolve, reject) => {
  resolve('er333r')
}).finally1(() => {
  console.log(2);
}).then((eerr) => {
  console.log(eerr);
})

Promise.prototype.finally = function (cb) {
  return this.then((val) => { 
    return Promise.resolve(cb()).then(() => val)
  }).catch(err => {
    return Promise.resolve(cb()).then(() => {
      throw new Error(err)
    })
  })
  
}












// function curry(fn) {
//   if (typeof fn !== 'function') {
//     throw Error('referance error')
//   }
//   let len = fn.length
//   return function curried (...args) {
//     if (args.length >= len) {
//       return fn.apply(this, args)
//     } else {
//       return function (...args1) {
//         return curried.apply(this, args.concat(args1))
//       }
//     }
//   }
// }
// /**
//  *  思考一下  这里到底要不要用apply绑定
//  * @param {*} a 
//  * @param {*} b 
//  * @param {*} c 
//  * @returns 
//  */

// function add(a, b, c) {
//   return a + b + c;
// }
// let test = curry(add);
// console.log(test(4,1)(2,4));