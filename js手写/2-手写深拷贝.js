function deepClone(obj) {
  let res
  if (typeof obj != 'object') {
    return obj
  }
  if (obj == null) {
    return null
  }
  if (obj instanceof Date) {
    res = new Date(obj)
  } else if (obj instanceof RegExp) {
    res = new RegExp(obj)
  } else {
    res = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
      let val = obj[key]
      if (obj.hasOwnProperty(key)) {
        if (typeof val === 'object') {
          res[key] = deepClone(val)
        } else {
          res[key] = val
        }
      }
    }
  }

  return res

}


let m = {
  a: 1,
  b: ["name", "xxx"],
  c: /^g/,
  d: { e: 1 },
  f: function (a, b) {
    console.log(666);
  },
};

console.log(deepClone(m));
m.b.push('aaa')
console.log(m);

function deepClone(obj) {
  let res
  let type = typeof obj
  if (type == 'object' && type !== null) {
    if (obj instanceof Date) {
      res = new Date(obj)
    } else if (obj instanceof RegExp) {
      res = new RegExp(obj)
    } else {
      res = Array.isArray(obj) ? [] : {}
      for (let key in obj) {
        let val = obj[key]
        if (obj.hasOwnProperty(key)) {
          if (typeof val === 'object') {
            res[key] = deepClone(val)
          } else {
            res[key] = val
          }
        }
      }
    }
    
  } else {
    return obj
  }
  return res
}






function deepCopy(obj) {
  // 如果不是对象则退出（可以停止递归
  if (typeof obj !== 'object') {
    return
  }
  // 深拷贝初始值
  let newObj = (obj instanceof Array) ? [] : {}
  for (let key in val) {
    // 只访问对象自身的属性
    if (obj.hasOwnProperty(i)) {
      if (!(key in newObj)) {
        if (obj[key]) {
          if (obj[key] instanceof RegExp) {
            newObj[key] = new RegExp(obj[key])
          } else if (obj[key] instanceof Date) {
            newObj[key] = new Date(obj[key].getTime())
          } else if (typeof obj[key] === 'object' && obj[key].nodeType === 1) {
            // 判断DOM节点
            let domEl = document.getElementsByTagName(obj[key].nodeType)[0]
            newObj[key] = domEl.cloneNode(true)
          } else {
            // 当元素属于对象时， 递归拷贝
          }
        }

      }
    }
  }
  return newObj
}




/**
 *  JSON.stringify实现深拷贝要注意
 *    1. 对象中的某一项键值是function函数、undefined、Symbol，会被丢失
 *    所以这个会造成数据丢失
 */