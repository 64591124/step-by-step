// 输入字符串s，以及其重复的次数，输出重复的结果，\
// 例如输入abc，2，输出abcabc

// 方法一 循环
function repeat(str, n) {
  let res = ''
  while (n--) {
    res += str
  }
  return res
}


// 方法二 数组特性
function repeat1(str, n) {
  return new Array(n+1).join(str)
}


// 方法三 递归   string类型也有concat！！！！！
function repeat2(str, n) {
  return n > 0 ? str.concat(repeat(str, --n)) : ""
}

console.log(repeat('abc', 3));
console.log(repeat1('abc', 3));
console.log(repeat2('abc', 3));