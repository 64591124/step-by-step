// 自己写的
function debounce(fn, delay = 200) {
  let timer
  return function fn(...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(null, this.args)
      timer = null
    },delay)
  }
}

let d  = 999
debounce(function () { })(222)


function debounce(fn, delay) {
  let last = +new Date()
  return function (...args) {
    let now = +new Date()
    if (now - last < delay) {
      last = +new Date()
    } else {
      fn.apply(this, args)
      last = now
    }
  }
}

function throtten(fn, delay = 200) {
  let timer = null
  return function (...args) {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(null, args)
      timer = null
    }, delay)
  }
}