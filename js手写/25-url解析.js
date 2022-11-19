
/**
 * 实现一个 URL query 的解析方法，能按照以下例子输出。
 *
 * @example
 * ```ts
 * parseQuery("https://kujiale.com?url=https%3A%2F%2Fkujiale.com
 * &arr=1&arr=2&obj=%7B%22a%22%3A1%2C%22b%22%3A2%7D");
 * // 结果如下：
 * // {
 * //   url: 'https://kujiale.com',
 * //   arr: [1, 2],
 * //   obj: { a: 1, b: 2 },
 * // }
 * ```
 * @param {string} url
 * @return {object}
 */
function parseQuery(url) {
  /* -------------------- BEGIN -------------------- */
  let len = url.length
  if (len == 0) {
    return {}
  }
  let res = {}, arr = [], map = new Map()
  let query2 = url.split('?')[1]
  let array = query2.split('&')
  for (let i = 0, length = array.length; i < length; i++) {
    let val = array[i].split('='), key = val[0], value = val[1]
    if (value.indexOf('%20' !== -1)) {
      value = decodeURIComponent(value)
    }
    if (res[key]) {
      typeof res[key]==='object' ? res[key].push(value) : res[key] = [res[key], value]
    } else {
      res[key] = value
    }
  }
  return res
} 
console.log(parseQuery(`https://kujiale.com?url=https%3A%2F%2Fkujiale.com&arr=1&tt=0&tt=8&obj=%7B%22a%22%3A1%2C%22b%22%3A2%7D`))