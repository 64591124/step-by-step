function unique(arr) {
  // console.log(arguments);
  // return Array.from(arguments)
  if (!Array.isArray(arr)) {
    return arr
  }
  let temp = new Set(),res = []
  for (let i = 0, len = arr.length; i < len; i++) {
    let val = arr[i]
    if (!temp.has(val)) {
      res.push(val)
      temp.add(val)
    }
  }
  return res
}

const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

console.log(unique(array, 1,2,3,4,5,6));; // [1, 2, 3, 5, 9, 8]