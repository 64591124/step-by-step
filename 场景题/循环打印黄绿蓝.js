const task1 = (timer, light, callback) => {
  setTimeout(() => {
    if (light == 'red') {
      // red()
      console.log('red');
    } else if (light == 'green') {
      // green()
      console.log('green');
    } else if (light === 'yellow') {
      // yellow()
      console.log('yellow');
    }
    callback()
  }, timer)
}

const step = () => {
  task1(3000, 'red', () => {
    task1(2000, 'green', () => {
      task1(1000, 'yellow', step)
    })
  })
}

// step()


// promise实现
const task2 = (timer, light) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (light == 'red') {
        // red()
        console.log('red');
      } else if (light == 'green') {
        // green()
        console.log('green');
      } else if (light === 'yellow') {
        // yellow()
        console.log('yellow');
      }
      resolve()
    }, timer)
  })
}
/// promise 实现
const step2 = () => {
  task2(3000, 'red').then(() => {
    task2(2000, 'green')
  }).then(() => {
    task2(2100, 'yellow')
  }).then(step)
}
// step2()


/// async实现
const taskRunner = async () => {
  await task2(3000, 'red')
  await task2(2002, 'green')
  await task2(2100, 'yellow')
  taskRunner()
}
// taskRunner()




const ppp = function (timer, color) {
  let now = 0, last = 0
  let data = new Date()
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      now =  data.getSeconds()
      if (color === 'red') {
        console.log('red');
      } else if (color === 'yellow') {
        console.log('yellow');
      } else {
        console.log('blue');
      }
      resolve()
    }, timer)
    last = now 
  })
}

let data = new Date()
console.log(new Date(data.getSeconds()))

const tt = () => {
  ppp(3000, 'red')
    .then(() => {
    ppp(2000, 'yellow')
  }).then(() => {
    ppp(1000, 'blue')
  }).then(tt)
}

tt()





