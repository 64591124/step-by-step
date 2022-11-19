// for (var i = 0; i < 5; i++) {
//   (function (i) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000)
    
//   })(i)
// }

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i+1);
  }, i*1000)
}