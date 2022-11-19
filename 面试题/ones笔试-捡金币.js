// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

var n = 0; // 初始状态为负数，表示还没开始读取
var arr = [];
var m;
var cur_line = 1;
rl.on('line', function (line) {
  // javascript每行数据的回调接口
  if (n == 0) {
    // 测试用例第一行读取n
    m = parseInt(line.trim());
  } else if (n == 1) {
    arr = line.split(' ').map((item) => parseInt(item));
  }
  if (n == cur_line) {
    let minV = Math.pow(10, 6);
    let resL = -1;
    let resR = -1; // console.log(arr)
    for (let i = 1; i < arr.length - 1; i++) {
      let resArr = getCount(arr, i);
      if (minV > resArr[0]) {
        [minV, resL, resR] = resArr;
      }
    }
    console.log(minV, resL, resR);
  }
  n++;
});

function getCount(arr, k) {
  let minV = Math.pow(10, 6);
  let leftSum = 0;
  let rightSum = 0;
  let resL = -1;
  let resR = -1;
  for (let i = 0; i < k; i++) {
    leftSum += arr[i];
    rightSum = 0;
    for (let j = arr.length - 1; j >= k; j--) {
      rightSum += arr[j];
      let cha = Math.abs(rightSum - leftSum);
      if (cha < minV) {
        minV = cha;
        resL = i + 1;
        resR = j + 1;
      }
    }
  }
  return [minV, resL, resR];
}
