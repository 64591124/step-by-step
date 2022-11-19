let all = function all(promises) {
  let len = promises.length;
  if (len == 0) {
    return Promise.resolve([]);
  }
  return new Promise((resolve, reject) => {
    let res = [],
      count = 0;
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i])
        .then(
          (val) => {
            res[i] = val;
            count++;
            if (count == len) {
              resolve(res);
            }
          },
          (err) => reject(err)
        )
        .catch((err) => reject(err));
    }
  });
};

let p1 = new Promise((res, rej) => {
  res(1);
});
let p2 = new Promise((res, rej) => {
  res(2);
});
let p3 = new Promise((res, rej) => {
  res(3);
});
let p4 = new Promise((res, rej) => {
  rej(4);
});

MyPromise.all = function (promisesList) {
  return new MyPromise((resolve, reject) => {
    if (!Array.isArray(promiselList)) return reject(new Error('必须是数组'))
    if (!promisesList.length) return resolve([])
    let arr = [], count = 0
    // 直接循环同时执行传进来的promise
    for (let i = 0, len = promisesList.length; i < len; i++) {
      // 因为有可能是 promise 有可能不是，所以用resolve()不管是不是都会自动转成promise
      Promise.resolve(promise).then(result => {
          // 由到promise在初始化的时候就执行了，.then只是拿结果而已，所以执行完成的顺序有可能和传进来的数组不一样
          // 也就是说直接push到arr的话，顺序有可能会出错
          count++
          arr[i] = result
          // 不能用arr.length===len，是因为数组的特性
          // arr=[]; arr[3]='xx'; console.log(arr.length) 这打印出来会是4 而不是1
          if(count === len) resolve(arr)
      }).catch(err => reject(err))
    }
  })
}


// function myPromiseAll(arrayList) {
//   return new Promise((resolve, reject) => {
//     let resultArr = [],
//       count = 0;
//     let length = arrayList.length;
//     for (let i = 0; i < length; i++) {
//       Promise.resolve(arrayList[i]).then(
//         (result) => {
//           count++;
//           resultArr[i] = result;
//           if (count == length) {
//             resolve(resultArr);
//           }
//         },
//         (err) => {
//           return reject(err);
//         }
//       );
//     }
//   });
// }

function test(num, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      num == 4 ? reject(num) : resolve(num);
    }, delay);
  });
}
// let p1 = test(1, 1000);
// let p2 = test(2, 2000);
// let p3 = test(3, 3000);
// let p4 = test(4, 4000);
let arr = [p1, p2, p3]
all(arr).then((result) => {
  console.log(result);
})

Promise.all = function (promises) {
  if (!Array.isArray(promises)) {
    throw new Error('type error')
  }
  let len = promises.length
  let res = []
  let index = 0
  if (len == 0) {
    return Promise.resolve([])
  }
  for (let i = 0; i < len; i++) {
    let p = promises[i]
    Promise.resolve(p).then((val) => {
      /// 保证所有结果都保存在了res中
      // 不能用res.length===len 因为数组的特性 
      // arr=[] arr[3]='cc' arr.length是等于4的 不是1
      index++ 
      res[i] = val
      if (index === len) {
        resolve(res)
      }
    }).catch(err => {
      reject(err)
    })
  }
}