Function.prototype.a = 1;
Object.prototype.b = 2;
function F() {
    //
}
const f = new F();
console.log(F.a); // 1
console.log(F.b); // 2
console.log(f.a); // undefined
console.log(f.b); // 2
F.b
f.a
f.b

console.log(F.prototype.prototype === Object);


console.log('Fpo',Object.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log('Fp', F.__proto__ === Function.prototype); // true
console.log('Op', F.__proto__ === Object.prototype); // false
console.log('OP', Object.__proto__ === Function.prototype); // true

console.log('FP', F.prototype === Function.__proto__); // true ??????

console.log('FPp', F.prototype.__proto__ === Function.prototype); // false
console.log('FOp', F.prototype.__proto__ === Object.prototype); // true
console.log('fp', f.__proto__ === F.prototype); // true

let a = new Function()
console.log(typeof a);
console.log(F.constructor === Function);
console.log(F.prototype.constructor === F); // true
console.log(Function.prototype === Object.getPrototypeOf(Function)); // true


var aa = { x: y = 3 } = { x: 5, y: 0 }
console.log(aa.x);
console.log(aa.y);