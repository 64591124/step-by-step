Array.prototype.map1 = function (fn) {
  let arr = this.slice(), res = []
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let val = fn(arr[i], i, this)
    res.push(val)
  }
  return res
}

let res = [1, 2, 3, 4].map1((item, i) => {
  return item * i
})
console.log(res);


// 支持异步
let arr1 = [1, 2, 3, 4, 5]
let ret = await Promise.all(arr.map(
  async (item) => {
    await new Promise(resolve => {
      setTimeout(() => {
        console.log('111');
        resolve()
      }, 2000)
    })
    return 10
  }))