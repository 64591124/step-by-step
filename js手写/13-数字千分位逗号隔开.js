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
console.log('t', formatNum2(number))
console.log(number);

function formatNum2(number) {
  let str = ''
  let arr = number.toString().split('')
  let length = arr.length
  while (length > 3) {
    str = `,${arr.splice(-3).join('')}` + str
    length = arr.length
  }
  return arr.join('') + str
}



var name = 'Tom'
var obj = {
    name: 'Jack',
    getName:function(){
      (function () {
          console.log('aaa',this.name);
          console.log('vaaa',this ===  global);
        })()
    }

} 
var fn = obj.getName.bind(obj)
fn()


