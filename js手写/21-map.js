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