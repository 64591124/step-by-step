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
function task5(timer, light) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (light === 'red') {
        console.log('red');
      } else if (light === 'yellow') {
        console.log('yellow');
      } else if (light === 'green') {
        console.log('green');
      }
      resolve()
    }, timer)
  })
}
const pp = () => {
  task5(3000, 'red').then(() => {
    task5(2000, 'green')
  }).then(() => {
    task5(1000, 'yellow')
  }).then(pp)
}


async function zzz() {
  await task5(3000, 'red')
  await task5(3000, 'yellow')
  await task5(1000, 'green')
  zzz()
}



zzz()