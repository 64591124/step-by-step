Array.prototype.reduce1 = function (fn, initVal) {
  let arr = this.slice()
  let pre = 0, index = 0
  let len = arr.length
  if (!initVal) {
    for (let i = 0; i < len; i++) {
      if (arr.hasOwnProperty(i)) {
        pre = arr[i]
        index = i + 1
        break
      }
    }
  } else {
    pre = initVal
  }
  for (let i = index; i < len; i++) {
    if (!arr.hasOwnProperty(i)) {
      continue
    }
    pre = fn.call(null, pre, arr[i], index, this)
  }
  return pre
}


function fn(pre, item) {
  return pre+item
}


Array.prototype.reduces = function (fn, initVal, context) {
  context = context || this
  let arr = this.slice()
  let len = arr.length
  let index = 0, pre
  if (!initVal) {
    for (let i = 0; i < len; i++) {
      if (arr.hasOwnProperty(i)) {
        pre = arr[i]
        index = i + 1
        break
      }
    }
  } else {
    pre = initVal
  }
  for (let i = index; i < len; i++) {
    if (!arr.hasOwnProperty(i)) continue
    pre = fn.call(null , pre, arr[i], i, this)
  }
  return pre
}

console.log([1, 2, 3, 4].reduces(fn, 9));
