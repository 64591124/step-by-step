// 自己写的
function debounce(fn, delay = 200) {
  let timer
  return function fn(...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(null, args)
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



// 节流

/// 保留最后一次触发
function throtten(fn, delay = 200) {
  let last = 0
  let timer
  return function (...args) {
    let now = new Date().getTime()
    let temp = now - last
    if (temp >= delay) {
      fn.apply(this, args)
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
    } else if(!timer){
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, delay - temp)
    }
  }
}