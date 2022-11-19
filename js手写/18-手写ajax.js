function handleGet(url) {
  let response
  const xhr = new XMLHttpRequest()
  xhr.open('GET',url)
  xhr.send()
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        response = xhr.responseText
      } else {
        throw new Error(xhr.status)
      }
    }
  }
}


function getJson(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send()
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(this.response)
          console.log(this);
        } else {
          reject(new Error(this.status))
        }
      }
    }
    xhr.onerror = function () {
      reject(new Error(this.statusText))
    }
    xhr.responseType = 'json'
    xhr.setRequestHeader('Accept', 'application')
  })
  
}

getJson('www.baidu.com')