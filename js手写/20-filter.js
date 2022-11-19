Array.prototype.filter1 = function (fn) {
  let arr = this.slice()
  let res = []
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let bool = fn(arr[i], i, this)
    if (bool) {
      res.push(arr[i])
    }
  }
  return res
}

let arr = [1, 2, 3, 4]
function fn(item) {
  return item > 2
}

console.log(arr.filter1(fn));