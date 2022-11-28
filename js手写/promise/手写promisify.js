// 首先定一个需要进行 promisify 的函数
function asyncFn(a, b, callback) {
  // 异步操作，使用 setTimeout 模拟
  console.log('异步请求参数', a, b)
  setTimeout(function() {
          callback('异步请求结果')
  }, 3000)
}

// 我们希望调用的方式是
const proxy = promisify(asyncFn)
proxy(11,22).then(res => {
  // 此处输出异步函数执行结果
  console.log(res)
})

// 定义一个方法，需要针对异步方法做封装，所以需要一个入参，既需要promisify的原异步方法
function promisify(asyncFn) {
  // 方法内部我们需要调用asyncFn，并传递原始参数，所以需要返回一个方法来接收参数
  return function (...args) {
    console.log(111, ...args);
    return new Promise((resolve, reject) => {
      // asyncFn需要执行一个回调，所以定义一个回调方法
      const callback = function (...args) {
        resolve(args)
      }
      args.push(callback)
      console.log(222, ...args);
      asyncFn.apply(null, args)
    })
  }
}
