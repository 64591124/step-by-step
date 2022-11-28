class EventEmitter {
  constructor() {
    this.cache = {}
  }
  on(name, fn) {
    if (!this.cache[name]) {
      this.cache[name] = []
    }
    this.cache[name].push(fn)
  }
  emit(name, ...arg) {
    if (!this.cache[name]) {
      return
    }
    let fns = this.cache[name].slice()
    for (let fn of fns) {
      fn(...arg)
    }
  }
  off(name, fn) {
    if (!this.cache[name]) {
      return 
    }
    this.cache[name] = this.cache[name].filter(item => {
      return item !== fn && item !== fn.initFn
    })
  }
  once(name, fn) {
    const one = (...args) => {
      fn(...args)
      this.off(name, one)
    }
    one.initFn = fn
    this.on(name, one)
  }

}


// 测试
let eventBus = new EventEmitter()
let fn1 = function(name, age) {
	console.log(`${name} ${age}`)
}
let fn2 = function(name, age) {
	console.log(`hello, ${name} ${age}`)
}
eventBus.on('aaa', fn1)
eventBus.on('aaa', fn2)
eventBus.emit('aaa', false, '布兰', 12)
// '布兰 12'
// 'hello, 布兰 12'



class EventEmitter {
  constructor() {
    this.arrayList = []
  }
  on(name, fn) {
    if (this.arrayList[name] && !this.arrayList[name].includes(fn)) {
      this.arrayList[name].push(fn)
    } else {
      this.arrayList[name] = [fn]
    }
  }

  off(name, fn) {
    if (this.arrayList[name]) {
      let index = this.arrayList[name].indexOf(fn)
      this.arrayList[name].splice(index, 1)
    }
  }

  emit(name, once = false, ...args) {
    if (this.arrayList[name]?.length > 0) {
      for (let key of this.arrayList[name]) {
        key.apply(this, args)
      }
      if (once) {
        delete this.arrayList[name]
      }
    }
  }
}
let s1 = new EventEmitter();
let f1 = function () {
  console.log(666);
};
let f2 = function () {
  console.log(777);
};
var input = document.querySelector("#ipt");
input.oninput = function (e) {
  obj.value = e.target.value;
};
let obj = {
  value: "",
};
Object.defineProperty(obj, "value", {
  get() {
    console.log("我被读了");
  },
  set(newVal) {
    s1.on("value1", function () {
      console.log("我的值是" + newVal);
      console.log("我被改了");
    });
    input.value = newVal;
    return newVal;
  },
});
