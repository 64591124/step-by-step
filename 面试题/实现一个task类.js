// 写一个 Task 类
class Task {
  constructor() {
    // coding here
    this.taskIndex = 0
    this.taskList = []
    this.stopRun = false
  }

  add(fn, context, ...args) {
    // coding here
    const next = () => {
      this.taskIndex++
      if (!this.stopRun && this.taskList[this.taskIndex]) {
        this.run()
      }
    }
    this.taskList.push(fn.bind(context, next, ...args))
    return this
  }

  run() {
    // coding here
    this.taskList[this.taskIndex]()
  }

  stop() {
    // coding here
    this.stopRun = true
  }
}

// 满足

function task1(next) {
  console.log(next);
  setTimeout(() => {
    console.log(1);
    next();
  }, 1000);
}

function task2(next, a) {
  console.log(this.queue);
  setTimeout(() => {
    console.log(a);
    next();
  }, 1000);
}

function task3(next, b, c) {
  setTimeout(() => {
    console.log(b);
    console.log(c);
    next();
  }, 1000);
}

const task = new Task();
task.add(task1).add(task2, task, 2).add(task3, task, 3, 4);
task.run();

// 备注：当任务函数执行 next 的时候，会跳转到下一个任务函数执行
