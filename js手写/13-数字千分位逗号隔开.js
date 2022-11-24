let number =1234567892
function formatNum(number){
  let str=''
  let arr=number.toString().split('')
  let length=arr.length
  while(length>3){
  str=`,${arr.splice(-3).join('')}`+str
  length=arr.length
  }
  return arr.join('')+str
}
console.log('t', formatNum(number))
console.log(number);





