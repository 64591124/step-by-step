/**
 *   递归实现
 * @param { } arr 
 * @returns 
 */
function flatten(arr) {
  if (!Array.isArray(arr)) {
    return arr
  }
  let len = arr.length, res = []
  for (let i = 0; i < len; i++){
    if (Array.isArray(arr[i])) {
      res = res.concat(flatten(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res
}


/**
 *   reduce 实现
 * 
 */
function flatten1(arr) {
  if (!Array.isArray(arr)) {
    return arr
  }
  let res
  res = arr.reduce((pre, curr) => {
    if (Array.isArray(curr)) {
      return  pre.concat(flatten1(curr))
    } else {
      return  pre.push(arr)
    }
  }, [])
  return res
 }

let arr = [1, [2, [3, [4, [5]]]]]
console.log(flatten2(arr, 2));


function flatten2(arr, depth) {
  if (!Array.isArray(arr) || depth<=0) {
    return arr
  }
  let res = arr.reduce((pre, item) => {
    if (Array.isArray(item)) {
      return pre.concat(flatten2(item, depth-1))
    } else {
      return pre.concat(item)
    }
  }, [])
  return res
}



