const raw = {
  value: '1',
  label: '节点1',
  children: [
    {
      value: '2',
      label: '节点1-1',
      children: [
        {
          value: '3',
          label: '节点1-1-1'
        }
      ]
    },
    {
      value: '4',
      label: '节点2'
    }
  ]
}
const res = [
  { value: 1, label: '节点1'},
  { value: 2, parentId: 1, label: '节点1-1'},
  { value: 3, parentId: 2, label: '节点1-1-1' },
  { value: 4, parentId: 1, label: '节点2'}
]
function tree2arr(obj) {
  const map = parse(obj)
  let res = []
  let keys = map.keys()
  for (let item of keys) {
    const parent = map.get(item)
    const { children, ...other} = item
    if (parent) {
      res.push({parentId: parent.value, ...other})
    } else {
      res.push(other)
    }
  }
  return res

  // 先将所有的key, value保存在map中,key是儿子，value是父亲
  function parse(raw, pre = null, map = new Map()) {
    if (!raw) {
      return 
    }
    map.set(raw, pre)
    const { children } = raw
    children?.forEach(item => {
      parse(item, raw, map)
    })
    return map
  }

}
console.log(tree2arr(raw));

function demo(obj) {
  const map = parse(obj)
  let res = []
  let keys = map.keys()
  for (let key of keys) {
    let parent  = map.get(key)
    let { children, ...other} = key
    if (parent) {
      res.push({'parentId': parent.value, ...other})
    } else {
      res.push(other)
    }
  }
  return res
  function parse(obj, pre = null, map = new Map()) {
    if (!obj) {
      return
    }
    map.set(obj, pre)
    const { children } = obj
    children?.forEach(item => {
      parse(item, obj, map)
    })
    return map
  }
}



console.log(demo(raw));
