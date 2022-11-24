
/**
 *  立即执行函数的this指向永远指向window || global 
 */

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

