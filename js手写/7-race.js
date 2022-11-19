let race = function (promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0, len = promises.length; i < len; i++) {
      Promise.resolve(promises[i]).then(val => {
        resolve(val)
      }).catch(err => {
        reject(err)
      })
    }
  })
  
}


function test(num, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      num == 4 ? reject(num) : resolve(num);
    }, time);
  });
}
let p4 = test(4, 1000);
let p1 = test(1, 2000);
let p2 = test(2, 1000);
let p3 = test(3, 5000);
race([p4,p3, p1, p2]).then((res) => {
  console.log(res);
}).catch((res) => {
  console.log(res);
});



