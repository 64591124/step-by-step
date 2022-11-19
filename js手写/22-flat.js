Array.prototype.flatt = function (depth) {
  let arr = this.slice()
  while (depth) {
    if (!arr.some(Array.isArray)) {
      return arr
    } else {
      arr = arr.reduce((pre, curr) => {
        return pre.concat(curr)
      }, [])
    }
    depth--
  }
  return arr
}




Array.prototype.flatt1 = function (depth = 1) {
  let arr = this.slice()
  if (depth < 1) {
    return arr
  }
  if (depth > 0) {
    arr = arr.reduce((pre, item) => pre.concat(item), [])
  }
  return arr.flatt1(depth-1)
}

let arr = [1, [2, [3, [4]]]]
console.log(arr.flatt1(2));


