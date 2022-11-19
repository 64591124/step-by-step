let imageAsync = (url) => {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.src = url
    img.onload = () => {
      resolve(img)
    }
    img.onerror = (err) => {
      reject(err)
    }
  })
}

imageAsync('url').then(() => {
  console.log('加载成功');
}).catch((error) => {
  console.log('加载失败');
})


let image = (url) => {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.src = url
    img.load = () => {
      resolve(img)
    }
    img.onerror = (err) => {
      reject(err)
    }
  })
}

image('url').then(() => {
  console.log('加载成功');
})