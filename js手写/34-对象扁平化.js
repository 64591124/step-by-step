var myObj={
  a: 'a',
      b: [1, { c: true }, [3]],
          d: { e: undefined, f: 3 },
  g: null,
}



function treeToObj(myObj) {
  function getObj(myObj, str, toObj) {
    const level = Object.keys(myObj)
    let levelStr = str.slice()
    if (levelStr != '') {
      levelStr = levelStr + '.'
    }
    for (key of level) {
      if (myObj[key]) {
        if (typeof (myObj[key]) === 'object') {
          getObj(myObj[key], levelStr + key, toObj)
        } else {
          toObj[levelStr + key] = myObj[key]
        }
      }
    }
    return toObj
  }
  return getObj(myObj, '', {})
}
console.log(treeToObj(myObj));



var entry = {
  a: {
    b: {
      c: {
        dd: 'abcdd'
      }
    },
    d: {
      xx: 'adxx'
    },
    e: 'ae'
  }
}

// 要求转换成如下对象
var output = {
  'a.b.c.dd': 'abcdd',
  'a.d.xx': 'adxx',
  'a.e': 'ae'
}


function flatObj(entry,s = '', result = {}) {
  for (const key in entry) {
    if (entry.hasOwnProperty(key)) {
      if (typeof entry[key] === 'object') {
        flatObj(entry[key], s+key+'.', result)
      } else {
        result[s+key] = entry[key]
      }
    }
  }
  return result
}
let result = {}
console.log(flatObj(entry, '', result));