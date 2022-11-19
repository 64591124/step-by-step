// 扁平的数据内容如下：后端返回的部门数据，可能直接从数据库查出来的，是扁平的。每个部门的上一级部门，用 pid 关联
const arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
];
// 实现一个函数 list2tree(arr)
function list2tree(arr) {
  // 定义一个新的tree
  const out = []
  // 可能先遍历的是后面节点的子节点，所以要缓存已经遍历的节点
  const idChildrenMap = new Map()
  arr.forEach((item) => {
    // 判断是否前面存在父节点
    let parentChildrenList = idChildrenMap.get(item.pid)
    if (!parentChildrenList) {
      // 前面没有出现当前节点的父节点，就将他设置成一个空数组
      parentChildrenList = []
      idChildrenMap.set(item.pid, parentChildrenList)
    }
    const newNode = {
      id: item.id,
      pid: item.pid,
      name: item.name,
      // 将缓存中pid===id的节点设置为item的children
      children: idChildrenMap.get(item.id)
    }
    // 将当前节点设置为父节点的children里，实现嵌套
    parentChildrenList.push(newNode)
    // 判断新节点是否有children
    if (!newNode.children) {
      newNode.children = []
      idChildrenMap.set(item.id, newNode.children)
    }
    // 判断当前节点是否为顶级，是的话就放out里
    if (item.pid === 0) {
      out.push(newNode)
    }
  })
  return out
}
console.log(JSON.stringify(list2tree(arr)));
// tree 的数据如下
let arr12 = [
  {
    id: 1,
    name: '部门1',
    pid: 0,
    children: [
      { id: 2, name: '部门2', pid: 1, children: [] },
      {
        id: 3,
        name: '部门3',
        pid: 1,
        children: [
          {
            id: 4,
            name: '部门4',
            pid: 3,
            children: [{ id: 5, name: '部门5', pid: 4, children: [] }],
          },
        ],
      },
    ],
  },
];

function jsonToTree3(data) {
  // 初始化结果数组，并判断输入数据的格式
  let result = []
  if(!Array.isArray(data)) {
    return result
  }
  // 使用map，将当前对象的id与当前对象对应存储起来
  let map = {};
  data.forEach(item => {
    map[item.id] = item;
  });
  // 
  data.forEach(item => {
    let parent = map[item.pid];
    if(parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}
console.log('hahaha', JSON.stringify(arrToTree(arr)));
function arrToTree(arr) {
  let res = []
  let parent = new Map()
  arr.forEach((item) => {
    parent.set(item.id, item)
  })
  arr.forEach(item => {
    let parentNode = parent.get(item.pid)
    if (parentNode) {
      if (!parentNode.children) {
        parentNode.children = []
      }
      parentNode.children.push(item)
    } else {
      res.push(item)
    }
  })
  return res
}
console.log('1117', JSON.stringify(demo(arr)));
function demo(arr) {
  let res = []
  let map = new Map()
  arr.forEach(item => {
    map.set(item.id, item)
  })

  arr.forEach(item => {
    let parentNode = map.get(item.pid) 
    if (parentNode) {
      console.log(parentNode.children);
      parentNode.children = parentNode.children ?? []
      parentNode.children.push(item)
    } else {
      res.push(item)
    }
  })
  return res
}