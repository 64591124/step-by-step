// 对象数遍历
const tree = {
  name: 'root',
  children: [
    {
      name: 'c1',
      children: [
        {
          name: 'c11',
          children: [],
        },
        {
          name: 'c12',
          children: [],
        },
      ],
    },
    {
      name: 'c2',
      children: [
        {
          name: 'c21',
          children: [],
        },
        {
          name: 'c22',
          children: [],
        },
      ],
    },
  ],
};

// 深度优先的方式遍历 打印name


function travaseTree(obj) {
  if (!obj) {
    return
  }
  let res = []
  res.push(obj.name)
  let { children } = obj
  children.forEach(item => {
    res = res.concat(travaseTree(item))
  })
  return res
}

let res = travaseTree(tree)
console.log(res);



