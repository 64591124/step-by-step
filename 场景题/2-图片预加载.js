/**
 *  解决办法
 *    git config --global --unset https.proxy
 */




const images = ["./src/imss.jpg", "./src/imss.jpg", "./src/imss.jpg"];
const loader = (url) => {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = function () {
      console.log('success');
      resolve()
    }
    image.onerror = () => {
      console.log('failed');
      reject()
    }
    image.src = url
  })
}

const preLoad = () => {
  const preLoaderArray = []
  images.forEach(url => {
    preLoaderArray.push(loader(url))
  })
  return Promise.allSettled(preLoaderArray)
}