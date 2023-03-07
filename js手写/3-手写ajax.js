function get(url) {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.send()
  xhr.onreadystatechange = function () {
      //onreadystatechange会触发多次，一般需要判断xhr.readState == 4 才获取响应数据
    if (xhr.readyState == 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        return xhr.responseText
      } else {
        return new Error(xhr.status)
      }
      }
  }

}


/// promise实现ajax 请求

function ajax(url) {
    return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send()
    xhr.onreadystatechange = function () {
      //onreadystatechange会触发多次，一般需要判断xhr.readState == 4 才获取响应数据
      if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.responseText)
        } else {
          reject(xhr.status)
        }
      }
    }
    // 设置错误处理函数
    xhr.onerror = function () {
      reject(new Error(xhr.statusText))
    }
    // 设置响应头
    xhr.responseType = 'json'
    // 设置请求头信息
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.send(null)
  })
}


function getJson(url) {
  let xhr = new XMLHttpRequest()
  let res
  xhr.open(url)
  xhr.onreadystatechange = function () {
    if (this.readyState !== 4) return 
    if (this.status >= 200 && this.status < 300) {
      res = this.response
    } else {
      console.error(this.statusText)
    }
  }

  // 设置请求失败时的回调
  xhr.onerror = function () {
    console.error(this.statusText);
     // 设置请求头信息
    xhr.responseType = 'json';
    xhr.setRequestHeader('Accept', statusText)
  }
  xhr.send(null)
}

function get() {
  let xhr = new XMLHttpRequest()
  let res
  xhr.open(url)
  xhr.onreadystatechange = function () {
    if (this.readyState !== 4) return
    if (this.status >= 200 && this.status < 300) {
      res = this.response
    } else {
      console.error(this.statusText)
    }
  }

}


function getp(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhe.onreadystatechange = function () {
      if (this.readyState !== 4) {
        return
      }
      if (this.status >= 200 && this.status < 300) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    xhr.onerror = function () {
      reject(new Error(this.statusText))
    }
    // 设置响应数据类型
    xhr.responseType = 'json'
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.send(null)
  })
}