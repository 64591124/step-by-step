//空格式
let a = 'hello world';
var b = a
  .split(' ')
  .map((item, index) => {
    if (index !== 0) {
      item = item.charAt(0).toUpperCase() + item.slice(1)
    }
  })
console.log(b);


function toUpWord(str) {
  let res = str.split('-')
  res = res.map((item, index) => {
    if (index !== 0) {
      console.log(item.charAt(0).toUpperCase() + item.slice(1));
      return item.charAt(0).toUpperCase() + item.slice(1)
    } else {
      return item
    }
  })
  console.log('ddd',res);
  return res.join(' ')
}

//横线式
let str = 'hello-world';

console.log('toup', toUpWord(str));




// 驼峰转字符串
const word = 'helloWorldHuangLeiBin';

function translate(word) {
  let res = word.slice(), arr = []
  let temp = 0
  let len = res.length
  for (let i = 0; i < len; i++) {
    let val = res.charAt(i)
    if (val <= 'Z' && val >= 'A') {
      if (temp === 0) {
      arr.push(res.slice(temp, i))
      } else {
        arr.push(res.charAt(temp).toLowerCase() + res.slice(temp + 1, i))
        console.log(111);
      }
      temp = i
    }
  }
  arr.push(res.charAt(temp).toLowerCase() + res.slice(temp+1))
    console.log('aa', arr);
  return arr.join('-')

}

// const word = 'helloWorldHuangLeiBin';

function getCamelCase(str) {
  let arr = str.split('')
  arr = arr.map((item) => {
    if (item.toUpperCase() !== item) {
      return item
    } else {
      return '-'+item.toLowerCase()
    }
  })
  console.log('-arr', arr);
  return arr.join('')

}
console.log('----',getCamelCase(word));