function unique(arr) {
  let map = new Set()
  let len = arr.length
  let res = []
  for (let i = 0; i < len; i++) {
    if (!map.has(arr[i])) {
      res.push(arr[i])
      map.add(arr[i])
    }
  }
  return res
}

let arr = [1, 3, 4, 5, 3, 4, 3, 2, 5, 5, 4, 6]
console.log(unique(arr));