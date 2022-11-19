function judge(raw, set = new Set()) {
  if (!raw) return false
  if (typeof raw !== 'object') return false
  // 如果set中有当前遍历的值，就返回true
  if (set.has(raw)) return true
  set.add(raw)

  // 遍历所有属性对应的值，判断里面是否有循环引用
  const keys = Object.keys(raw)
  let res = false
  keys.forEach(key => {
    const value = raw[key]
    res = res || judge(value, set)
  })
  return res
}

const obj = {
  name: "jzsp",
}
obj.a = obj

console.log(judge(obj))



function judge(raw, set = new Set()) {
  if (!raw) return false
  if (typeof raw !== 'object') {
    return false
  }
  if (set.has(raw)) return true
  set.add(raw)
  
  const keys = Object.keys(raw)
  let res = false
  keys.forEach(key => {
    const value = raw[key]
    res = res || judge(value, set)
  })
  return res
}