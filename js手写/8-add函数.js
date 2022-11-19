function add(x) {
  // let args = Array.prototype.slice.call(arguments)  错
  let sum = x
  let temp = function (x) {
    sum += x
    return temp
  }
  temp.toString = function () {
    return sum
  }
  return temp
}

let a = add(1)(2)(0);
console.log(add(1)(2)(0).toString());


